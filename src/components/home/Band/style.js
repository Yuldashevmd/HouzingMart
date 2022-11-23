import styled from "styled-components";
import bgImg from "../../../assets/imgbg/lentaBg.svg";

export const Container = styled.div `
  width: 100%;
  height: 571px;
  margin: 96px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgImg});
`;
export const Wrapper = styled.div `
  width: 600px;
  height: 203px;
  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 20px !important;
    }
  }
  .btn {
    margin: 48px auto;
    transition: all 0.2s ease-in-out;
    :hover {
      background: steelblue;
    }
  }
`;