import styled from "styled-components";

export const Container = styled.div `
  textarea {
    width: 100%;
    height: 130px;
    border: 1px solid #e6e6e6;
    outline: none;
    resize: none;
    margin: 24px 0;
    padding: 10px 15px;
  }
  h3 {
    margin: 48px 0 34px 0;
    font-weight: 600;
  }
  .blockWrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .block {
    width: 380px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      p {
        margin-bottom: 0;
      }
    }
  }
  .input {
    display: flex;
    gap: 0 20px;
    align-items: flex-end;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #0d263b;
    }
  }
`;