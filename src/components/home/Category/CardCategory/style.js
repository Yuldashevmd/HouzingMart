import styled from "styled-components";

export const Wrapper = styled.div `
  min-width: 280px;
  height: 350px;
  margin: 0 10px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: 1px solid grey;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 0.8;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;
export const Icon = styled.img `
  width: 60px !important;
  height: 60px;
  margin-bottom: 24px;
`;
export const Block = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 18px !important;
    }
  }
`;