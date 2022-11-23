import styled from "styled-components";

export const Container = styled.div `
  width: 1180px;
  margin: 96px auto;
  position: relative;
  .alice-carousel__next-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
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
    :hover {
      box-shadow: 0px 5px 20px grey;
    }
  }
  .alice-carousel__prev-btn {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
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
    :hover {
      box-shadow: 0px 5px 20px grey;
    }
  }
`;