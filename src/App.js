import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "web3";

import swal from "sweetalert";

import { EthereumContext } from "./contexts/EthereumContext";
// import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

const Main = React.lazy(() => import("./pages/main"));

function App() {
  const [provider, setProvider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [currentAcc, setCurrentAcc] = useState("");

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setProvider(ethereum);
      setWeb3(new Web3(ethereum));
      ethereum.on("accountsChanged", (accs) => {
        setAccounts(accs);
        setCurrentAcc(accs[0]);
      });
      ethereum.on("chainChanged", (chainId) => {
        if (chainId === "0x1") {
          swal(
            "Congratulations!",
            "Ethereum Mainnet Selected Successfully!",
            "success"
          );
        } else {
          swal("Sorry!", "Please Switch To Ethereum Mainnet!", "error");
        }
      });
    } else {
      swal(
        "Sorry!",
        "Please Install Metamask Wallet in this Browser!",
        "error"
      );
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      let accounts = await web3.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        setCurrentAcc(accounts[0]);
      }
    };
    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);

  return (
    <>
      <EthereumContext.Provider
        value={{ provider, accounts, web3, currentAcc }}
      >
        <Suspense fallback={<></>}>
          {/* <ScrollUpButton
            EasingType="linear"
            ShowAtPosition={1000}
            AnimationDuration={500}
          /> */}
          <Router>
            <Routes>
              {/* <Route path="/" element={<Main />}></Route> */}
            </Routes>
          </Router>
        </Suspense>
      </EthereumContext.Provider>
    </>
  );
}

export default App;
