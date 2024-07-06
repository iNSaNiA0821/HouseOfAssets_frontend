import React from "react";

// @import styles
import {
    AssetsContainer,
    AssetsContent,
    AssetsTextTitle,
    AssetsTextContent,
    AssetsBoldText,
    AssetsItalicText,
    AssetsLevelStep,
    AssetsTimelineSection,
    LevelStepRight,
    LevelStepLeft,
    LevelStepTimeLine,
    ImgArea1,
    ImgArea2,
    OnlyLine,
    HouseOfAssets,
    LevelOne,
    LevelTwo,
    TakeBoomie,
    TakeBoomieTitle,
    TakeBoomieContent
} from "./assets.styled";
// @import resource
// import Header from "../../components/Header";
import assets_symbol_1 from "../../assets/assets_symbol_1.svg";
import assets_symbol_2 from "../../assets/assets_symbol_2.svg";
import assets_img_1 from "../../assets/assets_img_1.webp";
import assets_img_2 from "../../assets/assets_img_2.webp";
import assets_timeline_roket from "../../assets/assets_timeline_roket.svg";
import assets_timeline_logo from "../../assets/HOA.png";
import assets_timeline_end from "../../assets/assets_timeline_end.png";

const Assets = () => {
    return (
        <AssetsContainer id="assets">
            {/* <Header /> */}
            <AssetsContent>
                <AssetsTextTitle>{"ASSETS ACTIVATIONS"}</AssetsTextTitle>
                <AssetsTextContent>
                    <AssetsBoldText>
                        {"Let the journey begin for our explorers to collect their assets"}
                    </AssetsBoldText>
                    <AssetsItalicText>
                        {"*Once we hit a target sell through percentage, we will begin to work on realizing the stated goal."}
                    </AssetsItalicText>
                </AssetsTextContent>
                <AssetsLevelStep>
                    <AssetsTimelineSection>
                        <LevelStepLeft>
                            <ImgArea1>
                                <img src={assets_symbol_1} alt="" width="160px" className="backward" />
                                <img src={assets_img_1} alt="" width="180px" className="forward" />
                            </ImgArea1>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <img src={assets_timeline_roket} alt="" width="130px" className="roket" />
                            <OnlyLine>
                                <HouseOfAssets>
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                            <LevelOne>Level 1</LevelOne>
                            <TakeBoomie position="left">
                            </TakeBoomie>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection style={{ height: "150px" }}>
                        <LevelStepLeft>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                            <TakeBoomie position="left">
                                <TakeBoomieTitle>TAKE A BOOMIE</TakeBoomieTitle>
                                <TakeBoomieContent>The 10,000 "Boomies" NFTs will be released on Houseofassets.com</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection>
                        <LevelStepLeft style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                            <TakeBoomie position="right">
                                <TakeBoomieTitle>ACCESS TO THE HOUSE</TakeBoomieTitle>
                                <TakeBoomieContent>The gates of the house will open for our members to gather.</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection style={{ height: "150px" }}>
                        <LevelStepLeft>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                            <TakeBoomie position="left">
                                <TakeBoomieTitle>GOLD HUNT</TakeBoomieTitle>
                                <TakeBoomieContent>Once we reveal our 10.000 Boomies, holders will have to look for the gold in their NFTs. The reward is USD $10,000 Prize in each NFT containing gold ($HOA equivalent).</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection>
                        <LevelStepLeft style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <TakeBoomie position="right">
                                <TakeBoomieTitle>MERCH DROP</TakeBoomieTitle>
                                <TakeBoomieContent>Member-Exclusive House Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                            <ImgArea2>
                                <img src={assets_symbol_2} alt="" width="160px" className="backward" />
                                <img src={assets_img_2} alt="" width="88px" className="forward" />
                            </ImgArea2>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection style={{ height: "150px" }}>
                        <LevelStepLeft>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                            <TakeBoomie position="left">
                                <TakeBoomieTitle>KEEP HOLDING</TakeBoomieTitle>
                                <TakeBoomieContent>The launch of our $HOA Token — our Boomies NFT holders will get 10.000 $HOA Token airdrops each.</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection style={{ height: "150px" }}>
                        <LevelStepLeft style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", flexDirection: "column" }}>
                            <TakeBoomie position="right">
                                <TakeBoomieTitle>HOUSE OF ASSETS MARKETPLACE</TakeBoomieTitle>
                                <TakeBoomieContent>The launch of our NFT Marketplace, holders enjoy exclusive access to select drops</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection>
                        <LevelStepLeft>
                            <LevelTwo>Level 2</LevelTwo>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine>
                                <HouseOfAssets>
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                            <TakeBoomie position="left">
                            </TakeBoomie>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection>
                        <LevelStepLeft>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <OnlyLine style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", height: 20 }}>
                                <HouseOfAssets>
                                    <img src={assets_timeline_logo} alt="" width="50px" />
                                </HouseOfAssets>
                            </OnlyLine>
                        </LevelStepTimeLine>
                        <LevelStepRight style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                            <TakeBoomie position="left">
                                <TakeBoomieTitle>DRINK</TakeBoomieTitle>
                                <TakeBoomieContent>NFT breeding</TakeBoomieContent>
                            </TakeBoomie>
                        </LevelStepRight>
                    </AssetsTimelineSection>

                    <AssetsTimelineSection>
                        <LevelStepLeft>
                        </LevelStepLeft>
                        <LevelStepTimeLine>
                            <HouseOfAssets>
                                <img src={assets_timeline_end} alt="" width="80px" style={{ marginTop: "30px", marginBottom: "30px" }} />
                            </HouseOfAssets>
                        </LevelStepTimeLine>
                        <LevelStepRight>
                        </LevelStepRight>
                    </AssetsTimelineSection>
                </AssetsLevelStep>
            </AssetsContent>
        </AssetsContainer>
    );
};

export default Assets;
