import React from "react";
import { Oval } from "react-loader-spinner";
import { MintButtonAction } from "./mintbutton.styled";

const MintButton = (props) => {
  const d = new Date();
  let time = d.getTime().toString().substring(0, 10);
  return props.currentAcc ? (
    props.supply >= 7500 && (time >= 1654441060 && time <= 1656428260) ? (
      <MintButtonAction disabled>{"🔥 Presale Ended 🎉"}</MintButtonAction>
    ) : props.mintable === 0 ? (
      <MintButtonAction disabled>{"Minted Max"}</MintButtonAction>
    ) : (
      <MintButtonAction onClick={props.mint}>
        {props.loading ? (
          <Oval color="#00BFFF" height={30} width={30} />
        ) : (
          props.isPeriod + " Mint"
        )}
      </MintButtonAction>
    )
  ) : (
    <MintButtonAction onClick={props.connect}>
      {"Connect Wallet"}
    </MintButtonAction>
  );
};

export default MintButton;
