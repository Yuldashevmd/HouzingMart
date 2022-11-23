import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  margin: 34px auto;
  h2 {
    margin-bottom: 24px;
  }
  .div {
    display: flex;
    align-items: flex-end;
    gap: 0 20px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }
  .time {
    display: flex;
    flex-direction: column !important;
    align-items: flex-start;
    justify-content: center;
    p {
      margin: 0;
      font-weight: 600;
    }
  }
  h3 {
    margin: 48px 0 24px 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #0d263b;
  }
`;
export const TextArea = styled.textarea `
  width: 100%;
  height: 130px;
  margin: 24px 0;
  border: 1px solid #e6e6ee;
  outline: none;
  padding: 10px 15px;
  resize: none;
`;