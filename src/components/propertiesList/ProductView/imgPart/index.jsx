import React from "react";
import { Container, Part } from "./style";
import MainImg from "../../../../assets/imgbg/carousel1.svg";
const ImgPart = ({ imgPath }) => {
  return (
    <Container>
      <Container.MainImg src={imgPath} alt="img" />
      <Container.PartyImg>
        <Part src={MainImg} alt="img"></Part>
        <Part src={MainImg} alt="img"></Part>
        <Part src={MainImg} alt="img"></Part>
        <Part src={MainImg} alt="img"></Part>
      </Container.PartyImg>
    </Container>
  );
};

export default ImgPart;
