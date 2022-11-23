import styled from "styled-components";
export const Container = styled.div `
  width: 100%;
  max-height: 100vh;
`;
export const Content = styled.div `
  width: 100%;
  height: 571px;
  position: relative;
`;
export const Wrap = styled.div `
  width: 100%;
  height: 571px;
  color: #fff;
  text-align: center;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background: ${({ bg }) => (bg ? bg : "rgba(0, 00, 00, 0.7)")};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentBlock = styled.div `
  width: 492px;
  height: 323px;
  .btn {
    margin: 50px auto;
    transition: all 0.2s ease-in-out;
    :hover {
      background: #fff;
      color: #000;
    }
  }
  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.02em;
    color: #ffffff;
    margin-bottom: 8px;
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 22px;
    }
  }
  p {
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 12px;
    }
  }
`;
export const IconWrapper = styled.div `
  width: 100%;
  height: 50px;
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;
  margin: 24px 0;
`;
export const Icon = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    fill: #fff;
  }
  p {
    margin: 0 0;
  }
`;
export const Arrows = styled.div `
  max-width: 1180px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 25rem;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between !important;
  z-index: 999;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 992px) {
    width: 40%;
  }
  @media screen and (max-width: 991px) and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
  .right {
    position: absolute;
    left: 35rem;
  }
  .left {
    position: absolute;
    right: 35rem;
  }
`;
export const ArrowBtn = styled.button `
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(11, 11, 11, 0.4);
  border: none;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    opacity: 0.8;
  }
`;