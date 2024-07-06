import styled from "styled-components";
import bgLanding from "../../assets/background.png";
import mintBg from "../../assets/mint_background.png";
import changeImage from "../../assets/NFT.gif";
import boomiesImage from "../../assets/boomiesImage.gif";

export const Houseofassets = styled.div``;

export const MainContainer = styled.div`
  background-image: url(${bgLanding});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100vw;
  background-position: center center;
`;

export const MintFormState = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
`

export const SoldOut = styled.div`
  font-size: 80px;
  font-weight: 800;
  color: white;
  text-align: center;
  width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background-color: #0124ff;
  box-shadow: var(--boxWhite);
  border: 10px solid white;
  margin: 50px 20px;
  position: relative;
  animation-name: mint-panel-animation;
  animation-duration: 2s;
  border-radius: 10px;
  @keyframes mint-panel-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }
  @media screen and (max-width: 420px) {
    font-size: 50px;
  }
  @media screen and (max-width: 380px) {
    font-size: 40px;
  }
`

export const MintContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-image: url(${mintBg});
  background-size: cover;
  background-position: center center;
  width: 100vw;
  background-attachment: fixed;
  min-height: 100%;
`;

export const MintContainerClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
  margin: 10px;
  color: white;
  cursor: pointer;
`;

export const MainContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 430px) {
    margin-left: 25px;
    padding-bottom: 10px;
  }
`;

export const GifImage = styled.div`
  width: 346px;
  height: 461px;
  background-image: url(${changeImage});
  background-size: 100% 100%;
  @media screen and (max-width: 430px) {
    width: 300px;
    height: 400px;
  }
`;

export const Boomies = styled.div`
  width: 731px;
  height: 92px;
  background-color: blue;
  display: flex;
  @media screen and (max-width: 810px) {
    width: 650px;
  }
  @media screen and (max-width: 730px) {
    width: 500px;
  }
  @media screen and (max-width: 570px) {
    width: 400px;
  }
  /* @media screen and (max-width: 450px) {
    width: 450px;
  } */
  @media screen and (max-width: 430px) {
    width: 330px;
    height: 70px;
  }
`;

export const BoomiesImage = styled.div`
  width: 80px;
  height: 100%;
  background-image: url(${boomiesImage});
  background-size: 100% 100%;
`;

export const BoomiesText = styled.div`
  width: 266px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  @media screen and (max-width: 570px) {
    width: 200px;
  }
`;

export const BigText = styled.div`
  font-size: 21px;
  font-weight: bold;
  padding-bottom: 5px;
  color: white;
  @media screen and (max-width: 730px) {
    font-size: 18px;
  }
  @media screen and (max-width: 570px) {
    font-size: 15px;
  }
  @media screen and (max-width: 430px) {
    font-size: 12px;
  }
`;

export const BoomiesMint = styled.div`
  width: 385px;
  display: flex;
  align-self: center;
  justify-content: flex-end;
  @media screen and (max-width: 810px) {
    width: 300px;
  }
  @media screen and (max-width: 730px) {
    width: 150px;
  }
  @media screen and (max-width: 570px) {
    width: 120px;
  }
  @media screen and (max-width: 430px) {
    width: 100px;
  }
`;

export const SmallText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: lightgreen;
  @media screen and (max-width: 570px) {
    font-size: 18px;
  }
  @media screen and (max-width: 430px) {
    font-size: 15px;
  }
`;

export const GoMintPage = styled.div`
  width: 142px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #000;
  margin-right: 25px;
  letter-spacing: 2px;
  font-weight: 450;
  &:hover {
    background-color: #d27efc;
    cursor: pointer;
    transition: 0.3s ease;
  }
  @media screen and (max-width: 430px) {
    width: 100px;
  }
`;

// mint form styles

export const MintForm = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  background-color: #0124ff;
  box-shadow: var(--boxWhite);
  border: 15px solid white;
  margin: 50px auto;
  position: relative;
  animation-name: mint-panel-animation;
  animation-duration: 2s;
  border-radius: 10px;
  @keyframes mint-panel-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 960px) {
    width: 600px;
    flex-direction: column;
    align-items: center;
    margin: 120px 10px 10px 10px;
  }
`;

export const MintComingSoon = styled.div`
  border: 10px solid white;
  border-radius: 15px;
  padding: 50px;
  background-color: blue;
  margin: 120px 10px 60px 10px;
  position: relative;
  animation-name: mint-panel-animation;
  animation-duration: 2s;
  @keyframes mint-panel-animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 500px) {
    .MintDate {
      padding: 0 2px 0 2px;
    }
    padding: 50px 0 50px 0;
  }
`;

export const MintComingSoonClose = styled.div`
  text-align: right;
  font-size: 30px;
  color: white;
  margin: -40px -40px 0 0;
  cursor: pointer;
  @media screen and (max-width: 500px) {
      margin: -40px 10px 0 0;
  }
`

export const MintFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MintFormAvatar = styled.img`
  width: 250px;
  margin-top: -25px;
  @media screen and (max-width: 400px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const MintFormRight = styled.div`
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

export const MintFormText = styled.p`
  /* font-family: 'EB Garamond', serif; */
  font-weight: 700;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin: 15px auto;
  letter-spacing: 3px;
  border-bottom: 1px solid white;
  /* text-align: center; */
  @media screen and (max-width: 960px) {
    margin: 15px auto;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;




