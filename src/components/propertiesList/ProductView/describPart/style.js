import styled from "styled-components";

export const Content = styled.div `
  width: 880px;
  p {
    margin-bottom: 0;
  }
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      display: flex;
      gap: 0 26px;
      .shareIcon {
        display: flex;
        align-items: center;
        gap: 0 10px;
        .bgShare {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #e6e6e6;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          margin: 0;
        }
      }
    }
    h1 {
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;
      color: #0d263b;
    }
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    p {
      text-decoration: line-through;
    }
    h1 {
      margin: 0;
      font-weight: 600;
      color: #0d263b;
      font-size: 24px;
    }
  }
  .iconDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons {
      display: flex;
      gap: 20px;
      margin-bottom: 48px;
      .icon {
        display: flex;
        align-items: center;
        gap: 0 8px;
      }
    }
  }
`;
export const Describ = styled.div `
  .showBtn {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-decoration-line: underline;
    border: none;
    background: transparent;
    color: #0061df;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      opacity: 0.7;
    }
  }
  h2 {
    margin: 0 0 16px 0;
  }
`;
export const DocPart = styled.div `
  margin: 48px auto 64px auto;
  h2 {
    margin: 16px 0;
  }
`;
export const Documents = styled.div `
  display: flex;

  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 0;
  }
  .download {
    display: flex;
    align-items: center !important;
    gap: 15px;
    button {
      border: none;
      outline: none;
      color: #0061df;
      border-bottom: 1px solid #0061df;
      font-weight: 600;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;