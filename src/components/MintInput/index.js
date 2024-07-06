import React from "react";
import {
  FaPlus,
  FaMinus
} from "react-icons/fa";
import {
  MintInputContainer,
  MintInputStepDecrease,
  MintInputStepIncrease,
  MintNumericInput,
} from "./mintinput.styled";

const MintInput = (props) => {
  return (
    <MintInputContainer>
      <MintInputStepDecrease
        onClick={() => props.amount > 0 && props.setAmount(props.amount - 1)}
      >
        <FaMinus />
      </MintInputStepDecrease>
      <MintNumericInput>{props.amount}</MintNumericInput>
      <MintInputStepIncrease
        onClick={() =>
          props.amount < props.mintable && props.setAmount(props.amount + 1)
        }
      >
        <FaPlus />
      </MintInputStepIncrease>
    </MintInputContainer>
  );
};

export default MintInput;
