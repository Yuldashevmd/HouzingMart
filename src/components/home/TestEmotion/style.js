import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  min-height: 482px;
  margin: auto;
  margin-top: 96px;
  padding: 25px 0;
  background: #f5f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 20px !important;
    }
  }
  p {
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 12px !important;
    }
  }
`;
export const Wrapper = styled.div `
  width: 1180px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 545px) {
    width: 100%;
    height: 600px;
  }
  @media screen and (max-width: 544px) {
    width: 95%;
    height: 500px;
  }
  .block {
    width: 265px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    :hover .title,
    .describ {
      opacity: 0.7;
    }
    .title {
      font-size: 18px !important;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
    }
    .describ {
      font-size: 16px !important;
      font-weight: 400;
      transition: all 0.2s ease-in-out;
    }
    .icon {
      width: 45px;
      height: 45px;
      margin-bottom: 20px;
    }
  }
  .alice-carousel__next-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
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
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }
  }
  .alice-carousel__prev-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
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
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }
  }
`;