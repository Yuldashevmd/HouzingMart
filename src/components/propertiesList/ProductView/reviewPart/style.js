import styled from "styled-components";

export const Conatiner = styled.div `
  width: 100%;
  margin: 24px auto;
  h3 {
    margin: 48px 0 24px 0;
  }
  .text {
    font-weight: 600;
    margin-bottom: 24px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export const Block = styled.div `
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 0 25px;
  .imgBelowText {
    margin: 10px 0 !important;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0d263b;
  }
  img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    border: 1px solid grey;
    border-radius: 50%;
  }
  .range {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
    p {
      margin: 0;
    }
  }
  .span {
    color: gray;
    margin-bottom: 20px;
  }
  .comment {
    color: gray;
  }
`;