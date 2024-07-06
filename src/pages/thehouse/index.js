import React from "react";

// @import styles
import {
    ThehouseContainer,
    ThehouseContent,
    ThehouseTextTitle,
    ThehouseTextContent,
    ThehouseTextPara1,
    ThehouseTextPara2,
    ThehouseTextPara3,
    ThehouseTextPara4,
    TheHouseSymbol,
    TheHouseMainImg,
    ThehouseSpace,
    TheHouseHeader,
    TheHouseHeaderTitle
} from "./thshouse.styled";

import thehouse_mainshape from "../../assets/thehouse_mainshape.png";
import thehouse_mainimg from "../../assets/thehouse_mainimg.webp";
// @import resource
// import Header from "../../components/Header";

const Thehouse = () => {
    return (
        <ThehouseContainer id="thehouse">
            {/* <Header /> */}
            <ThehouseContent>
                <TheHouseSymbol>
                    <img src={thehouse_mainshape} alt="" width="40px" />
                </TheHouseSymbol>

                <TheHouseHeader>
                    <TheHouseHeaderTitle>FROM THE BACKSTREET<br /> TO THE HOUSE</TheHouseHeaderTitle>
                    <img src={thehouse_mainshape} alt="" width="35px" />
                </TheHouseHeader>

                <ThehouseTextContent>
                    <ThehouseTextTitle>FROM THE BACKSTREET TO THE HOUSE</ThehouseTextTitle>
                    <ThehouseTextPara1>
                        House of Assets is a private society.
                        <br />
                        A new kind of society that we build together. A society for the metaverse. By the community.
                    </ThehouseTextPara1>
                    <ThehouseTextPara2>
                        Starting with a collection of 10,000 Boomies that give you membership access to The House. It starts with exclusive assets, NFT drops, investments and much more that will be revealed over time.
                        <br />
                        House of Assets is your identity in the metaverse — let's build together.
                    </ThehouseTextPara2>
                    <ThehouseTextPara3>
                        The House is a corner of the internet where art, community, and culture fuse to create magic. The lines between the physical and digital worlds are blurring and the rules are being rewritten.
                    </ThehouseTextPara3>
                    <ThehouseTextPara4>Take a Boomie.</ThehouseTextPara4>
                </ThehouseTextContent>
                <ThehouseSpace></ThehouseSpace>
                <TheHouseMainImg>
                    <img src={thehouse_mainimg} alt="" style={{ marginTop: "-100px" }} />
                </TheHouseMainImg>
            </ThehouseContent>
        </ThehouseContainer>
    );
};

export default Thehouse;
