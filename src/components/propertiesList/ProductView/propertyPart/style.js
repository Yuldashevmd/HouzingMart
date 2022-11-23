import styled from "styled-components";

export const Container = styled.div `
  margin: 34px auto;
`;
export const Block = styled.div `
  display: flex;
  width: 100%;
  p {
    margin-bottom: 0;
    font-weight: 600;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
  }
  .block {
    width: 250px;
    padding: 0 10px;
    div {
      display: flex;
      align-items: center;
      gap: 0px 8px;
      margin: 24px 0;
      i {
        font-weight: 600;
      }
    }
  }
`;