import styled from "styled-components";

export const MintButtonAction = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: 0.3s ease;
  font-size: 23px;
  transition: 0.3s ease;
  position: relative;
  transform: translate(0);
  background-color: rgb(167, 0, 250);
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
  color: white;
  /* font-family: 'EB Garamond', serif; */
  font-weight: 700;
  &:hover {
    background-color: #D27EFC;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    font-size: 20px;
  }
`;
