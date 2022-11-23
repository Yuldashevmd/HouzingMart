import styled from "styled-components";

export const Container = styled.div `
  margin: 34px auto;
`;
export const Block = styled.div `
  display: flex;
  width: 100%;
  p {
    margin-bottom: 0;
  }
  .block {
    width: 220px;
    padding: 0 10px;
    .iconDiv {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 32px 0;
      div {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #f6f8f9;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        cursor: pointer;
        :hover {
          background: #e6e6e6;
        }
      }
      i {
        font-weight: 600;
      }
    }
  }
`;