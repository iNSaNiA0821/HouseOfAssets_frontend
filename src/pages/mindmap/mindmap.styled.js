import styled from "styled-components";

export const MindmapContainer = styled.div`
  width: 100vw;
  background-color: white !important;
  padding: 50px 0 0 0;
`;

export const MindmapContent = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1050px) {
    width: 90%;
  }
`;

export const MindmapTextTitle = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: blue;
  margin-bottom: 20px;
  @media screen and (max-width: 370px) {
    font-size: 30px;
  }
`;

export const MindmapTextContent = styled.div`
  color: blue;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 15px;
  line-height: 20px;
`;

export const MindmapText = styled.div`
  margin-top: 20px;
`;

export const Mindmapstep = styled.div`
  width: 100%;
  margin: 20px 0 50px 0;
  display: grid;
  grid-template-columns: 20% 30% 50%;
  position: relative;
  
  @media screen and (max-width: 1050px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto;
  }
`;

export const Step1 = styled.div`
  width: auto;
  height: 323px;
  background-color: #eaf2ff;
  margin: 0 10px 10px 0;
  cursor: pointer;
  color: #acc2f5;
  display: flex;
  align-items: flex-end;
  .textarea {
    .bigText {
      font-size: 50px;
      margin: 0 0 30px 10px;
    }
    .smallText {
      margin: 0 0 20px 15px;
      display: flex;
     img {
        margin-left: 5px;
        height: 10px;
        width: 40px;
        margin-top: 5px;
      }
    }
  }
  .stepimage {
    margin: 0 0 60px -30px;
    transform: rotate(-10deg);
    margin-left: -80px;
  }
  @media screen and (max-width: 1050px) {
    justify-content: space-between !important;
    .stepimage {
      margin: 0;
      margin-bottom: 20px;
      width: 180px;
    }
  }
  
  @media screen and (max-width: 400px) {
    .stepimage {
      margin-left: -400px !important;
    }
  }
`;

export const Step2 = styled.div`
  width: auto;
  height: 177px;
  background-color: #eaf2ff;
  margin: 0 10px 10px 0;
  cursor: pointer;
  color: #acc2f5;
  display: flex;
  align-items: flex-end;
  .textarea {
    .bigText {
      font-size: 50px;
      margin: 0 0 30px 10px;
    }
    .smallText {
      margin: 0 0 20px 15px;
      display: flex;
      img {
        margin-left: 5px;
        height: 10px;
        margin-top: 5px;
        width: 40px;
      }
    }
  }
  .stepimage {
    margin: 0 0 60px -70px;
  }
  @media screen and (max-width: 650px) {
    display: ${(props) => (props.current !== "" ? "none" : "")};
  }
  @media screen and (max-width: 1050px) {
    justify-content: space-between !important;
    .stepimage {
      margin: 0;
      margin-bottom: 10px;
      width: 100px;
    }
  }
`;

export const Step3 = styled.div`
  width: auto;
  height: 510px;
  background-color: #eaf2ff;
  margin: 0 10px 10px 0;
  cursor: pointer;
  color: #acc2f5;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .textarea {
    .bigText {
      font-size: 50px;
      margin: 0 0 30px 10px;
    }
    .smallText {
      margin: 0 0 20px 15px;
      display: flex;
      img {
        margin-left: 5px;
        height: 10px;
        margin-top: 5px;
        width: 40px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    display: ${(props) => (props.current !== "" ? "none" : "")};
  }
  @media screen and (max-width: 400px) {
    .stepimage {
      margin-left: -400px !important;
    }
  }
`;

export const Step4 = styled.div`
  width: auto;
  height: 510px;
  background-color: #eaf2ff;
  margin: 0 10px 10px 0;
  cursor: pointer;
  color: #acc2f5;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  .textarea {
    .bigText {
      font-size: 50px;
      margin: 0 0 30px 10px;
    }
    .smallText {
      margin: 0 0 20px 15px;
      display: flex;
      img {
        margin-left: 5px;
        height: 10px;
        margin-top: 5px;
        width: 40px;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    justify-content: space-between !important;
    .stepimage {
      margin: 0;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 460px) {
    .stepimage {
      width: 200px;
    }
  }
  @media screen and (max-width: 400px) {
    .stepimage {
      margin-left: -400px !important;
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width: 360px) {
    .stepimage {
      margin-bottom: 50px;
    }
  }
`;

export const StepInfo1 = styled.div`
  background-color: #eaf2ff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.current === "step1" ? "grid" : "none")};
  grid-template-columns: 60% 40%;
  padding: 0 100px 0 100px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 100%;
    padding: 50px;
  }
  @media screen and (max-width: 650px) {
    padding: 0;
  }
  animation-name: smood;
  animation-duration: .5s;
  @keyframes smood {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 0 0 0;
  @media screen and (max-width: 650px) {
    padding-left: 30px;
    padding-right: 30px;
    /* justify-content: flex-end !important; */
  }
`
export const RightArea = styled.div`
  .rotateImage {
    transform: rotate(-10deg);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1050px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const StepInfo1Title = styled.div`
  font-size: 30px;
  color: blue;
  line-height: 30px;
  @media screen and (max-width: 400px) {
    font-size: 22px;
  }
`

export const StepInfo1BoldText = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
`

export const StepInfo1Text = styled.div`
  font-size: 15px;
  margin-top: 30px;
  font-weight: 500;
`

export const StepInfo2 = styled.div`
  background-color: #eaf2ff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.current === "step2" ? "grid" : "none")};
  grid-template-columns: 60% 40%;
  padding: 0 100px 0 100px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 100%;
    padding: 50px;
  }
  @media screen and (max-width: 650px) {
    padding: 0;
  }
  animation-name: smood;
  animation-duration: .5s;
  @keyframes smood {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const StepInfo3 = styled.div`
  background-color: #eaf2ff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.current === "step3" ? "grid" : "none")};
  grid-template-columns: 60% 40%;
  padding: 0 100px 0 100px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 100%;
    padding: 50px;
  }
  @media screen and (max-width: 650px) {
    padding: 0;
  }
  animation-name: smood;
  animation-duration: 0.5s;
  @keyframes smood {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const StepInfo4 = styled.div`
  background-color: #eaf2ff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.current === "step4" ? "grid" : "none")};
  grid-template-columns: 60% 40%;
  padding: 0 100px 0 100px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 100%;
    padding: 50px;
  }
  @media screen and (max-width: 650px) {
    padding: 0;
  }
  animation-name: smood;
  animation-duration: 0.5s;
  @keyframes smood {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  img {
    margin-top: -20px;
  }
`

export const StepInfo5 = styled.div`
 background-color: #eaf2ff;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: ${(props) => (props.current === "step5" ? "grid" : "none")};
  grid-template-columns: 60% 40%;
  padding: 0 100px 0 100px;
  @media screen and (max-width: 1050px) {
    grid-template-columns: 100%;
    padding: 50px;
  }
  @media screen and (max-width: 650px) {
    padding: 0;
  }
  animation-name: smood;
  animation-duration: .5s;
  @keyframes smood {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Stepclose = styled.div`
  position: absolute;
  z-index: 2;
  right: 0;
  margin: 10px 10px;
  font-size: 30px;
  cursor: pointer;
  color: blue;
  display: ${(props) => (props.current !== "" ? "block" : "none")};
`;

