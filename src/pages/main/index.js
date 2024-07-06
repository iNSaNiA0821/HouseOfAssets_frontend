import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import swal from "sweetalert";

import MintInput from "../../components/MintInput";
import MintButton from "../../components/MintButton";
import Header from "../../components/Header";
// import ThehousePage from "../thehouse";
// import AssetsPage from "../assets";
// import Manifesto from "../manifesto";
// import Mindmap from "../mindmap";
// @import styles
import {
  Houseofassets,
  MainContainer,
  MainContent,
  MintContainer,
  GifImage,
  Boomies,
  BoomiesImage,
  BoomiesText,
  BigText,
  SmallText,
  BoomiesMint,
  GoMintPage,
  MintContainerClose,
  MintForm,
  MintFormAvatar,
  MintFormLeft,
  MintFormRight,
  MintFormText,
  SoldOut,
  // MintFormState
} from "./main.styled";
// @import resource

import { useEthContext } from "../../contexts/EthereumContext";
import { contractAddress } from "../../contracts/Address";
import { contractABI } from "../../contracts/MintABI";
import nft from "../../assets/boomiesImage.gif";

const Main = () => {
  const { provider, currentAcc, web3 } = useEthContext();
  const [showMint, setShowMint] = useState(false);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState(0);
  const [mintable, setMintable] = useState(0);
  const [mintedamount, setMinted] = useState(0);
  const [supply, setSupply] = useState(0);
  const [isWhitelist, setWhitelist] = useState(false);
  const [isPeriod, setPeriod] = useState("");
  const [balance, setBalance] = useState(0);
  const [pause, setPause] = useState(false);
  const [proof, setProof] = useState([]);

  useEffect(() => {
    if (web3 && currentAcc) {
      const getBalance = async () => {
        const balance = (
          Number(await web3.eth.getBalance(currentAcc)) /
          10 ** 18
        ).toFixed(2)
        setBalance(balance)
      }
      getBalance()
    }
  }, [web3, currentAcc])

  useEffect(() => {
    if (web3 && currentAcc) {
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const interval = setInterval(async () => {
        await contract.methods
          .totalToken()
          .call()
          .then((res) => {
            setSupply(res);
          })
          .catch((err) => {
            toast.error(err, { theme: "dark" });
          });

        await contract.methods
          .isStatus()
          .call()
          .then((res) => {
            setStatus(res);
          })
          .catch((err) => {
            toast.error(err, { theme: "dark" });
          });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [web3, currentAcc]);

  useEffect(() => {
    const getInfo = async () => {
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const proof = await axios
        .get(
          `https://houseofassets-backend.vercel.app/get/${currentAcc}`
        )
        .then((res) => {
          return res.data.proof;
        });

      const isWhitelisted = await contract.methods
        .isWhitelist(proof)
        .call({ from: currentAcc });

      setProof(proof);
      setWhitelist(isWhitelisted);

      const minted = await contract.methods.ownWallet(currentAcc).call();
      setMinted(minted);
    };
    if (currentAcc) {
      getInfo();
      if (currentAcc.toLowerCase() === "0xacCF93304AD545928951392a29cA2B5ABCa5F38D".toLowerCase()) {
        setPrice(1);
        setPeriod("Paid");
        if (10 - mintedamount < 0) {
          setMintable(0);
        } else {
          setMintable(10 - mintedamount);
        }
      } else {
        if (isWhitelist) { // From June 17th To June 19th
          setPrice(0);
          if (10 - mintedamount < 0) {
            setMintable(0);
          } else {
            setMintable(10 - mintedamount);
          }
          setPeriod("Whitelist");
        } else {
          setPrice(0);
          setPeriod("Public");
          setPause(false);
          if (2 - mintedamount < 0) {
            setMintable(0);
          } else {
            setMintable(2 - mintedamount);
          }
        }
      }
    } else {
      setPeriod("TBD");
      setPrice("TBD");
      setMintable(0);
    }
  }, [currentAcc, status, web3, supply, mintedamount, isWhitelist]);

  const handleConnectWallet = async () => {
    if (provider) {
      if (Number(window.ethereum.chainId) !== 1) {
        swal("Sorry!", "Please Switch To Ethereum Mainnet!", "error");
      } else {
        await provider.request({ method: `eth_requestAccounts` });
      }
    } else {
      swal(
        "Sorry!",
        "Please Install Metamask Wallet in this Browser!",
        "error"
      );
    }
  };

  const handleNFTMint = async () => {
    if (pause) {
      swal("Sorry!", "The Mint Paused!", "error");
    } else {
      if (Number(window.ethereum.chainId) !== 1) {
        swal("Sorry!", "Please Switch To Ethereum Mainnet!", "error");
      } else {
        if (amount !== 0) {
          // console.log(price * amount)
          if (balance <= price * amount) {
            swal("Sorry!", "Insufficient balance including gas fee to mint.", "error");
          } else {
            setLoading(true);
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            if (currentAcc.toLowerCase() === "0xacCF93304AD545928951392a29cA2B5ABCa5F38D".toLowerCase()) {
              if (isWhitelist) {
                await contract.methods
                  .whitelistMint(amount, proof)
                  .send({
                    from: currentAcc,
                    value: await web3.utils.toWei(
                      (((price * amount).toFixed(2) * 100) / 100).toString(),
                      "ether"
                    ),
                  })
                  .on("receipt", function (receipt) {
                    swal("Congratulations!", "Mint Success!", "success");
                    setMintable(mintable - amount);
                    setAmount(0);
                    setLoading(false);
                  })
                  .on("error", function (error) {
                    swal("Sorry!", "Mint Failure!", "error");
                    setAmount(0);
                    setLoading(false);
                  });
              } else {
                swal("Sorry!", "Not Registion User", "warning");
                setLoading(false);
              }
            } else {
              if (isWhitelist) {
                await contract.methods
                  .whitelistMint(amount, proof)
                  .send({
                    from: currentAcc,
                    value: await web3.utils.toWei(
                      (((price * amount).toFixed(2) * 100) / 100).toString(),
                      "ether"
                    ),
                  })
                  .on("receipt", function (receipt) {
                    swal("Congratulations!", "Mint Success!", "success");
                    setMintable(mintable - amount);
                    setAmount(0);
                    setLoading(false);
                  })
                  .on("error", function (error) {
                    swal("Sorry!", "Mint Failure!", "error");
                    setAmount(0);
                    setLoading(false);
                  });
              } else {
                await contract.methods
                  .mintItem(amount)
                  .send({
                    from: currentAcc,
                    value: await web3.utils.toWei(
                      (((price * amount).toFixed(2) * 100) / 100).toString(),
                      "ether"
                    ),
                  })
                  .on("receipt", function (receipt) {
                    swal("Congratulations!", "Mint Success!", "success");
                    setMintable(mintable - amount);
                    setAmount(0);
                    setLoading(false);
                  })
                  .on("error", function (error) {
                    swal("Sorry!", "Mint Failure!", "error");
                    setAmount(0);
                    setLoading(false);
                  });
              }
            }
          }
        } else {
          swal("Sorry!", "Please Check Amount!", "warning");
        }
      }
    }
  };

  const maxAmount = async () => {
    setAmount(mintable)
  }

  return (
    <Houseofassets>
      <MainContainer>
        {showMint ? (
          <MintContainer>
            {supply >= 10000 ? (
              <SoldOut>
                <MintContainerClose onClick={() => setShowMint(false)}>
                  <FaTimes />
                </MintContainerClose>
                <span className="SoldOut">Sold Out</span>
              </SoldOut>
            ) : (
              <MintForm>
                <MintContainerClose onClick={() => setShowMint(false)}>
                  <FaTimes />
                </MintContainerClose>
                <MintFormLeft>
                  <MintFormAvatar src={nft} alt="nft" />
                  {/* <MintFormState>
                    {supply}
                    {" / 10000"}
                  </MintFormState> */}
                </MintFormLeft>
                <MintFormRight>
                  <MintFormText>
                    {isPeriod + " Period : " + (price === 0 ? "Free" : price + "ETH")}
                  </MintFormText>
                  <MintFormText>
                    {"Mintable NFTs : "}
                    <span style={{ cursor: "pointer" }} onClick={maxAmount}>{mintable}</span>
                    {/* onClick={maxAmount} */}
                  </MintFormText>
                  <MintFormText>
                    {"Address : "}
                    {currentAcc
                      ? `${currentAcc.substring(0, 6)}...${currentAcc.substring(
                        38
                      )}`
                      : "TBD"}
                  </MintFormText>
                  <MintInput
                    amount={amount}
                    setAmount={setAmount}
                    mintable={mintable}
                  />
                  <MintButton
                    loading={loading}
                    currentAcc={currentAcc}
                    mintable={mintable}
                    isPeriod={isPeriod}
                    connect={handleConnectWallet}
                    mint={handleNFTMint}
                    supply={supply}
                  />
                </MintFormRight>
              </MintForm>
            )}
          </MintContainer>
        ) : (
          ""
        )}
        <Header />
        <MainContent>
          <div>
            <GifImage />
            <Boomies>
              <BoomiesImage></BoomiesImage>
              <BoomiesText>
                <BigText>{"SOMETHING IS COMING"}</BigText>
                <SmallText>{"BOOMIES"}</SmallText>
              </BoomiesText>
              <BoomiesMint>
                <GoMintPage onClick={() => setShowMint(!showMint)}>
                  {"MINT"}
                </GoMintPage>
              </BoomiesMint>
            </Boomies>
          </div>
        </MainContent>
      </MainContainer>
      {/* {!showMint ? (
        <div>
          <ThehousePage />
          <AssetsPage />
          <Manifesto />
          <Mindmap />
        </div>
      ) : ("")} */}
    </Houseofassets>
  );
};

export default Main;
