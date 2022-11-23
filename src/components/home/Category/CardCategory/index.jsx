import React from "react";
import { Block, Icon, Wrapper } from "./style";
import Img2 from "../../../../assets/cardBgCat/2.svg";
import icon1 from "../../../../assets/categoryIcon/1.svg";
const CardCategory = ({ name }) => {
  return (
    <Wrapper>
      <Block>
        <Icon src={icon1} alt="icon" />
        <h1>{name}</h1>
      </Block>
      <img src={Img2} alt="bg" />
    </Wrapper>
  );
};

export default CardCategory;
