import styled from "styled-components";

export const Container = styled.div `
  width: 1180px;
  margin: 96px auto;
  position: relative;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 545px) {
    width: 100%;
  }
  @media screen and (max-width: 544px) {
    width: 95%;
    margin-top: 120px;
  }
  h1 {
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
  .alice-carousel__next-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 0 5px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    border: 1px solid #e6e9ec;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -8%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    /* Media */
    @media screen and (max-width: 1180px) and (min-width: 545px) {
      top: 108%;
      right: 35%;
    }
    @media screen and (max-width: 544px) {
      top: 108%;
      right: 35%;
      width: 35px;
      height: 35px;
    }
    :hover {
      box-shadow: 0px 0 5px rgba(0, 0, 0, 0.25);
    }
  }
  .alice-carousel__prev-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 0, 5px rgba(0, 0, 0, 0.1);
    background: #ffffff;
    border: 1px solid #e6e9ec;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: -8%;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    /* Media */
    @media screen and (max-width: 1180px) and (min-width: 545px) {
      top: 108%;
      left: 35%;
    }
    @media screen and (max-width: 544px) {
      top: 108%;
      left: 35%;
      width: 35px;
      height: 35px;
    }
    :hover {
      box-shadow: 0px 0 5px rgba(0, 0, 0, 0.25);
    }
  }
`;