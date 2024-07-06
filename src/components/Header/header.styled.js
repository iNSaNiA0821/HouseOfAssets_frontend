import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

export const HeaderNav = styled.div`
  height: 140px;
  width: 1500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 1550px) {
    width: 90%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin-left: 8px;
  }
`;

export const HeaderLogo = styled.a`
  cursor: pointer;
  display: flex;
  padding: 0 10px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 8px 8px 8px rgba(167, 0, 250, 0.1);
`;

export const NavLinks = styled.div`
  display: ${(props) => (props.isMobile ? "none" : "flex")};
`;

export const Nav = styled.a`
  padding: 15px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  color: blue;
  &:hover {
    color: #d27efc;
    transition: 0.3s ease;
  }
`;

export const NavLink = styled.a`
  padding: 20px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s ease;
  &:hover {
    color: var(--hover);
    transition: 0.3s ease;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 320px) {
    margin-top: 0 !important;
    img {
      width: 50px;
    }
  }
`;

export const SocialLink = styled.a`
  padding: 7px;
`;

export const NavMobile = styled.div`
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  position: absolute;
  right: 25px;
  color: blue;
  font-size: 30px;
  background: white;
  padding: 6px 12px;
  border-radius: 15px;
  transition: 0.3s ease;
  z-index: 100;
  cursor: pointer;
  align-items: center;
  height: 60px;
  box-shadow: 5px 5px 5px rgba(167, 0, 250, 0.1);
  & > svg {
    width: 35px;
    color: blue;
  }
  @media screen and (max-width: 400px) {
    right: 0;
    margin-right: 10px;
  }
`;

// mobile menubar styles

export const HeaderMobile = styled.div`
  width: ${(props) => (props.isOpened ? "100%" : 0)};
  height: 100vh;
  position: fixed;
  z-index: 200;
  background: #0015ff;
  overflow-x: hidden;
  transition: 0.5s;
`;

export const HeaderMobileContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderMobileHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  height: 100px;
  text-align: center;
  padding: 0px 25px;
  
`;

export const HeaderMobileHeaderClose = styled.div`
  font-size: 30px;
  width: 100%;
  text-align: right;
  font-weight: 700;
  color: #fff;
  position: relative;
  top: -10px;
  cursor: pointer;
`;

export const HeaderHeaderClose = styled.div`
  position: absolute;
  font-size: 50px;
  right: 0;
  top: 0;
  color: black;
  margin: -70px -70px 0 0;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

// export const HeaderMobileHeaderContent = styled.p`
//   font-size: 35px;
//   font-weight: 700;
//   width: 100%;
//   text-align: center;
//   position: relative;
//   color: yellow;
// `;

export const HeaderMobileActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 320px) {
    margin-top: -20px;
  }
`;

export const MobileNav = styled.a`
  width: 100%;
  line-height: 90px;
  font-weight: 900;
  color: #fff;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media screen and (max-width: 320px) {
      line-height: 70px;
      font-weight: 700;
      font-size: 25px;
  }
`;
