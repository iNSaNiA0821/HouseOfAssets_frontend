import styled from "styled-components";
// import NumericInput from "react-numeric-input";

export const MintInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px auto 40px auto;
  border-bottom: 1px solid white;
  /* font-family: 'EB Garamond', serif; */
  font-weight: 700;
`;

export const MintNumericInput = styled.div`
  background-color: transparent;
  text-align: center;
  color: white;
  font-size: 25px;
  width: 20%;
`;

const MintInputStep = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5px 15px;
  text-decoration: none;
  cursor: pointer;
  font-size: 10px;
`;

export const MintInputStepIncrease = styled(MintInputStep)`
  font-size: 15px;
  width: 40%;
`;

export const MintInputStepDecrease = styled(MintInputStep)`
  font-size: 15px;
  width: 40%;
`;
