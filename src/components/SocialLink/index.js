import React from "react";
import { SocialAction } from "./sociallink.styled";

const SocialLink = (props) => {
  return (
    <SocialAction href={props.href} target="_blank">
      {props.children}
    </SocialAction>
  );
};

export default SocialLink;
