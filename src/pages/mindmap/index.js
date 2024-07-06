import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// @import styles
import {
  MindmapContainer,
  MindmapContent,
  MindmapTextTitle,
  MindmapTextContent,
  MindmapText,
  Mindmapstep,
  Step1,
  Step2,
  Step3,
  Step4,
  StepInfo1,
  StepInfo2,
  StepInfo3,
  StepInfo4,
  StepInfo5,
  LeftArea,
  StepInfo1Title,
  StepInfo1BoldText,
  StepInfo1Text,
  RightArea,
  Stepclose
} from "./mindmap.styled";
// @import resource
// import Header from "../../components/Header";
import step1_image from "../../assets/step1.png";
import step2_image from "../../assets/step2.png";
import step3_image from "../../assets/step3.png";
import step3_image_info from "../../assets/step3_info.png";
import step4_image from "../../assets/step4.png";
import step5_image from "../../assets/step5.gif";
import arrow_right from "../../assets/arrow_right.png";

const Mindmap = () => {
  const [currentstep, setCurrentstep] = useState("");
  const setCurrentstepfunc = () => {
    setCurrentstep("");
  };
  return (
    <MindmapContainer id="vision">
      {/* <Header /> */}
      <MindmapContent>
        <MindmapTextTitle>{"VISION"}</MindmapTextTitle>
        {/* <hr /> */}
        <MindmapTextContent>
          <MindmapText>
            We are guided by a simple yet profound vision - create the largest
            decentralized powerhouse for the metaverse that is built for the community.
          </MindmapText>
          <Mindmapstep>
            <Stepclose current={currentstep} onClick={setCurrentstepfunc}>
              <FaTimes />
            </Stepclose>
            <div>
              <StepInfo1 current={currentstep}>
                <LeftArea>
                  <StepInfo1Title>BOOMIES</StepInfo1Title>
                  <StepInfo1BoldText>“Boomies” is a collection of 10,000 randomly-generated NFTs — the first series to be released on Houseofassets.com Chain.</StepInfo1BoldText>
                  <StepInfo1Text>Each NFT is unique and comes with membership to the HOUSE Society, which includes access to exclusive benefits and utilities.</StepInfo1Text>
                  <StepInfo1Text>The HOUSE NFT are ultra-rich Boomies who live inside Golden vaults. Unsurprisingly, they are inpatient, they want to get richer now! And they enjoy throwing explosive parties for their golden group of friends.</StepInfo1Text>
                </LeftArea>
                <RightArea>
                  <img src={step1_image} alt="" width="70%" className="rotateImage" />
                </RightArea>
              </StepInfo1>
              <StepInfo2 current={currentstep}>
                <LeftArea>
                  <StepInfo1Title>MARKETPLACE</StepInfo1Title>
                  {/* <StepInfo1BoldText>“Boomies” is a collection of 10,000 randomly-generated NFTs — the first series to be released on Houseofassets.com Chain.</StepInfo1BoldText> */}
                  {/* <StepInfo1Text>Each NFT is unique and comes with membership to the HOUSE Society, which includes access to exclusive benefits and utilities.</StepInfo1Text> */}
                  <StepInfo1Text>House of Assets marketplace  enables participants to manage and exchange NFTs priced in HOA and soon you will be able to incorporate them into our universe.</StepInfo1Text>
                </LeftArea>
                <RightArea>
                  <img src={step2_image} alt="" width="70%" />
                </RightArea>
              </StepInfo2>
              <StepInfo3 current={currentstep}>
                <LeftArea>
                  <StepInfo1Title>$HOA TOKEN</StepInfo1Title>
                  <StepInfo1Text>$HOA Token, is a cryptocurrency that powers House of Assets Marketplace, Games and Metaverse. Also rewards our holders, you can tell the satisfaction!</StepInfo1Text>
                </LeftArea>
                <RightArea>
                  <img src={step3_image_info} alt="" width="80%" />
                </RightArea>
              </StepInfo3>
              <StepInfo4 current={currentstep}>
                <LeftArea>
                  <StepInfo1Title>HOUSE OF ASSETS UNIVERSE</StepInfo1Title>
                  <StepInfo1Text><b>PLAY TO I EARn GAMES </b>Using a cutting edge technology called Blockchain to reward players for their engagement on our ever expanding universe of games.</StepInfo1Text>
                  <StepInfo1Text><b>METAVERSE </b>House of Assets metaverse will be a place where players can build, own and monetize their lands assets and virtual experience on the Ethereum Blockchain</StepInfo1Text>
                </LeftArea>
                <RightArea>
                  <img src={step4_image} alt="" width="60%" />
                </RightArea>
              </StepInfo4>
              <StepInfo5 current={currentstep}>
                <LeftArea>
                  <StepInfo1Title>HOUSE OF ASSETS UNIVERSE</StepInfo1Title>
                  <StepInfo1Text><b>PLAY TO I ARN GAMES </b>Using a cutting edge technology called Blockchain to reward players for their engagement on our ever expanding universe of game.</StepInfo1Text>
                  <StepInfo1Text><b>METAVERSE </b>House of Assets metaverse will be a place where players can build, own and monetize their lands assets and virtual experience on the Ethereum Blockchain</StepInfo1Text>
                </LeftArea>
                <RightArea>
                  <img src={step5_image} alt="" width="70%" />
                </RightArea>
              </StepInfo5>
              <Step1
                current={currentstep}
                onClick={() => {
                  setCurrentstep("step1");
                }}
              >
                <div className="textarea">
                  <div className="bigText">01</div>
                  <div className="smallText">BOOMIES<img src={arrow_right} width="40" alt="" /></div>
                </div>
                <img src={step1_image} className="stepimage" width="150px" alt="" />
              </Step1>
              <Step2
                current={currentstep}
                onClick={() => {
                  setCurrentstep("step2");
                }}
              >
                <div className="textarea">
                  <div className="bigText">02</div>
                  <div className="smallText">
                    MARKETPLACE<img src={arrow_right} width="40" alt="" />
                  </div>
                </div>
                <img src={step2_image} className="stepimage" alt="" width="70px" />
              </Step2>
            </div>
            <div>
              <Step3
                current={currentstep}
                onClick={() => {
                  setCurrentstep("step3");
                }}
              >
                <div className="textarea">
                  <div className="bigText">
                    03
                  </div>
                  <div className="smallText">
                    TOKEN<img src={arrow_right} width="40" alt="" />
                  </div>
                </div>
                <img src={step3_image} className="stepimage" alt="" />
              </Step3>
            </div>
            <div>
              <Step4
                current={currentstep}
                onClick={() => {
                  setCurrentstep("step4");
                }}
              >
                <div className="textarea">
                  <div className="bigText">04</div>
                  <div className="smallText">METAVERSE<img src={arrow_right} width="40" alt="" /></div>
                </div>
                <img src={step4_image} alt="" className="stepimage" width="250px" />
              </Step4>
            </div>
          </Mindmapstep>
        </MindmapTextContent>
      </MindmapContent>
    </MindmapContainer >
  );
};

export default Mindmap;
