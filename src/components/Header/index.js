import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMobile,
  HeaderMobileActions,
  HeaderMobileContent,
  HeaderMobileHeader,
  HeaderMobileHeaderClose,
  HeaderNav,
  // MobileNav,
  // Nav,
  NavLinks,
  NavMobile,
  Socials,
  SocialLink,
} from "./header.styled";

// import { links } from "./data";
import logo from "../../assets/logo.webp";
import { isScreenWidth } from "../../utils/getScreenWidth";
import twitter from "../../assets/social_twitter.png";
import discord from "../../assets/social_discord.png";
import opensea from "../../assets/social_opensea.png";

const Header = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(860));
    });
    setIsMobile(isScreenWidth(860));
  }, []);
  const [isOpened, setIsOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <HeaderContainer>
      <HeaderMobile isOpened={isOpened}>
        <HeaderMobileContent>
          <HeaderMobileHeader>
            <HeaderMobileHeaderClose onClick={() => setIsOpened(!isOpened)}>
              <FaTimes />
            </HeaderMobileHeaderClose>
            {/* <HeaderMobileHeaderContent>
              {"House of Assets"}
            </HeaderMobileHeaderContent> */}
          </HeaderMobileHeader>
          <HeaderMobileActions>
            {/* {links.map((item, index) => (
              <MobileNav
                key={index}
                href={item.href}
                onClick={() => setIsOpened(!isOpened)}
              >
                {item.value}
              </MobileNav>
            ))} */}
            <Socials style={{ marginTop: "30px" }}>
              <SocialLink href="https://twitter.com/Houseofassets" target="_blank">
                <img src={twitter} alt="twitter" width="60px" />
              </SocialLink>
              <SocialLink href="https://discord.gg/Houseofassets" target="_blank">
                <img src={discord} alt="discord" width="60px" />
              </SocialLink>
              <SocialLink href="https://opensea.io/collection/boomies" target="_blank">
                <img src={opensea} alt="opensea" width="60px" />
              </SocialLink>
            </Socials>
          </HeaderMobileActions>
        </HeaderMobileContent>
      </HeaderMobile>
      <HeaderNav>
        <HeaderLogo href="https://www.houseofassets.com/">
          <img src={logo} alt="logo" width="100%" />
        </HeaderLogo>
        <NavLinks isMobile={isMobile}>
          {/* {links.map((item, index) => (
            <Nav key={index} href={item.href}>
              {item.value}
            </Nav>
          ))} */}
          <Socials>
            <SocialLink href="https://twitter.com/Houseofassets" target="_blank">
              <img src={twitter} alt="twitter" width="25px" />
            </SocialLink>
            <SocialLink href="https://discord.gg/Houseofassets" target="_blank">
              <img src={discord} alt="discord" width="25px" />
            </SocialLink>
            <SocialLink href="https://opensea.io/collection/boomies" target="_blank">
              <img src={opensea} alt="opensea" width="25px" />
            </SocialLink>
          </Socials>
        </NavLinks>
        <NavMobile isMobile={isMobile} onClick={() => setIsOpened(!isOpened)}>
          <FaBars />
        </NavMobile>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
