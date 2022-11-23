import styled from "styled-components";

export const Conatiner = styled.div `
  width: 1180px;
  height: fit-content;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Detail = styled.div `
  width: 1180px;
  margin: 24px auto;
  display: flex;
  gap: 20px;
`;
export const Content = styled.div `
  width: 880px;
`;
export const Textarea = styled.textarea `
  border: none;
  border-bottom: 1px solid #0d263b !important;
  width: 232px;
  resize: none;
  margin: 10px 0;
`;
export const Aside = styled.div `
  width: 280px;
  height: 476px;
  padding: 24px 26px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
  }
  .person {
    display: flex;
    align-items: center;
    gap: 0 10px;
    .userName {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #0d263b;
      text-transform: capitalize;
    }
    p {
      margin-bottom: 0;
    }
    img {
      width: 40px;
      height: 40px;
      border: 1px solid grey;
      border-radius: 50%;
    }
  }

  .check {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }
`;