import styled, { css } from "styled-components";

const flex = css `
  display: flex;
  justify-content: center;
  align-items: center;
`;
const color = css `
  color: #0d263b;
`;

export const Block = styled.div `
  width: 380px;
  height: 429px;
  margin-bottom: 24px;
  border: 1px solid #e6e9ec;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  position: relative !important;
  /* Media */
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 380px;
  }
  @media screen and (max-width: 543px) {
    max-width: 300px;
    margin: 0 15px;
  }
`;
export const Img = styled.div `
  width: 381px;
  height: 220px;
  /* Media */
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100%;
  }
  @media screen and (max-width: 543px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 3px 0 0;
  }
`;
export const BlockSale = styled.div `
  width: 320px;
  height: 222px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 18px;
  left: 8%;

  /* Media */
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 85%;
  }
  @media screen and (max-width: 543px) {
    width: 85%;
  }
  .sale__img {
    width: 40px;
    height: 40px;
    margin-left: auto;
    border: 3px solid #fff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sale__btn {
    display: flex;
    justify-content: space-between;
  }
`;
export const Button = styled.div `
  width: 73px;
  height: 23px;
  ${flex}
  border-radius: 3px;
  background: ${(props) => (props.color === "blue" ? "#0061DF" : "#0D263B")};
  color: #fff;
  border: none;
  font-size: 10px;
  cursor: pointer;
`;
export const BlockText = styled.div `
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;

  /* Media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
  }
`;
export const TextParagh = styled.div `
  width: 90%;
  margin: auto;
  h3 {
    ${color}
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
    cursor: pointer;
    margin-bottom: 0;
    :hover {
      opacity: 0.7;
    }
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
`;
export const TextIcons = styled.div `
  width: 90%;
  margin: 4% auto;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
export const TextFooter = styled.div `
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer__price {
    p {
      font-size: 12px;
      margin-bottom: 0;
    }
    span {
      font-size: 16px;
    }
  }
  .footer__i {
    width: 20%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;
export const Icon = styled.div `
  ${flex};
  flex-direction: column;
  span {
    color: #696969;
    /* media */
    @media screen and (max-width: 450px) {
      font-size: 10px !important;
    }
  }
  img {
    width: 19px;
    @media screen and (max-width: 450px) {
      width: 22px !important;
    }
  }
`;