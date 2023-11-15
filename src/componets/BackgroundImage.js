import React from "react";
import background from "../assets/Black and Silver Star Dust Love Facebook Cover.png";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background"></img>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
