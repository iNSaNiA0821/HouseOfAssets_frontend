import React from "react";

// @import styles
import {
  ManifestoContainer,
  ManifestoMainArea,
  ManifestoContent,
  ManifestoContentSpace,
  ManifestoTextTitle,
  ManifestoTextContent,
  ManifestoTextPara1,
  ManifestoTextPara2,
  ManifestoTextPara3,
  ManifestoTextPara4,
} from "./manifesto.styled";
// @import resource
// import Header from "../../components/Header";

const Manifesto = () => {
  return (
    <ManifestoContainer id="manifesto">
      {/* <Header /> */}
      <ManifestoMainArea>
        <ManifestoContent>
          <ManifestoTextTitle>{"THE MANIFESTO"}</ManifestoTextTitle>
          {/* <hr /> */}
          <ManifestoTextContent>
            <ManifestoTextPara1>
              Here comes a new era...
              <br />
              And navigating here is different.
              <br />
              Breaking down barriers.
              <br />
              Building new opportunities for the community.
              <br />
              Creating magic internet money with our friends.
              <br />
              To those who don't get it, we tell them: gm.
              <br />
              They'll come around eventually.
            </ManifestoTextPara1>
            <ManifestoTextPara2>
              Here's to the ones with the courage to explore a new world. A world that creates more for everyone. From The House come the Boomies to bring you capital.
            </ManifestoTextPara2>
            <ManifestoTextPara3>
              We rise together.
              <br />
              We build together.
              <br />
              We grow together.
              <br />
            </ManifestoTextPara3>
            <ManifestoTextPara4>Ready to take a Boomie?</ManifestoTextPara4>
          </ManifestoTextContent>
        </ManifestoContent>
        <ManifestoContentSpace></ManifestoContentSpace>
      </ManifestoMainArea>
    </ManifestoContainer>
  );
};

export default Manifesto;
