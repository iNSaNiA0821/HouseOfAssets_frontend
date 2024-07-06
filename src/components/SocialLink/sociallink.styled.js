import styled from "styled-components";

export const SocialAction = styled.a`
  background: var(--accent);
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  font-weight: 700;
  border-radius: 100%;
  transition: 0.3s ease;
  font-size: 20px;
  &:hover {
    box-shadow: var(--boxHover);
  }
  & > svg {
    font-family: "Font Awesome 6 Brands";
    font-weight: 400;
  }
`;
