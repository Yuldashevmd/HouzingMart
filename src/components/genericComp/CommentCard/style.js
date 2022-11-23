import styled from "styled-components";

export const Container = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    position: relative;
    top: -20px;
  }
  .person {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #0d263b;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #696969;
  }
`;
export const Card = styled.div `
  width: 380px;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 48px 61px 48px;
  /* media */
  @media screen and (max-width: 544px) {
    max-width: 300px;
    font-size: 12px !important;
  }
`;