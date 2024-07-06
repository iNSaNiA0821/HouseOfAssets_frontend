import styled from "styled-components";

export const AssetsContainer = styled.div`
  width: 100vw;
  background-color: white;
  padding: 50px 0 50px 0;
`;

export const AssetsContent = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AssetsTextTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: blue;
  padding: 0 20px 0 20px;
  @media screen and (max-width: 370px) {
    font-size: 30px;
  }
`;

export const AssetsTextContent = styled.div`
  color: blue;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 20px;
  margin-top: 30px;
  padding: 0 20px 0 20px;
`;

export const AssetsBoldText = styled.div`
  font-size: 15px;
`;

export const AssetsItalicText = styled.span`
  font-style: italic;
  font-size: 12px;
  font-weight: 600;
`

export const AssetsLevelStep = styled.div`
  margin-top: 40px;
`

export const AssetsTimelineSection = styled.div`
  display: flex;
`

export const LevelStepLeft = styled.div`
  width: 450px;
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 800px) {
    width: 250px;
  }
  @media screen and (max-width: 570px) {
    width: 150px;
  }
  @media screen and (max-width: 360px) {
    width: 120px;
  }
`

export const LevelStepTimeLine = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .roket {
    transform: rotate(180deg);
    margin-top: 30px;
  }
  @media screen and (max-width: 800px) {
    width: 70px;
  }
  @media screen and (max-width: 570px) {
    width: 60px;
  }
`

export const OnlyLine = styled.div`
    height: 100%;
    width: 5px;
    background-color: #2f54dd;
    margin-top: -5px;
    display: flex;
    flex-direction: column;
`

export const HouseOfAssets = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    @media screen and (max-width: 420px) {
      width: 40px;
    }
  }
`

export const LevelStepRight = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 1000px) {
    width: 350px;
  }
  @media screen and (max-width: 800px) {
    width: 250px;
  }
  @media screen and (max-width: 570px) {
    width: 150px;
  }
  @media screen and (max-width: 360px) {
    width: 120px;
  }
`

export const ImgArea1 = styled.div`
  width: 100%;
  position: relative;
  .backward {
      position: absolute;
      /* z-index: -1; */
      bottom: 0;
  }
  .forward {
      transform: rotate(-15deg);
      margin: 0 0 0 -25px;
  }
`

export const ImgArea2 = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  .backward {
      position: absolute;
      bottom: 0;
      transform: rotateX(180deg);
      z-index: -1;
    }
    .forward {
        margin: 90px 0 0 25px;
    }
    @media screen and (max-width: 605px) {
        width: 100%;
    }
    @media screen and (max-width: 420px) {
        width: 70%;
    }
`

export const LevelOne = styled.div`
    color: #0015FF;
    font-size: 23px;
    margin-top: 200px;
    font-weight: 800;
`

export const LevelTwo = styled.div`
    color: #0015FF;
    font-size: 23px;
    font-weight: 800;
    text-align: right;
    @media screen and (max-width: 360px) {
      font-size: 20px;
    }
`

export const TakeBoomie = styled.div`
    text-align: ${(props) => (props.position === "left" ? "left" : "right")};
`
export const TakeBoomieTitle = styled.div`
    font-size: 15px;
    color: blue;
    font-weight: bold;
    @media screen and (max-width: 360px) {
      font-size: 13px;
    }
`
export const TakeBoomieContent = styled.div`
    font-size: 15px;
    color: black;
    @media screen and (max-width: 360px) {
      font-size: 12px;
    }
`



