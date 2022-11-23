import styled from "styled-components";
import "../../../index.css";
export const Container = styled.div `
  width: 1180px !important;
  margin: auto;
`;
export const Title = styled.div `
  width: 1180px;
  display: flex;
  margin: 34px auto;
  justify-content: space-between;
  h1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #0d263b;
  }
  input {
    height: 40px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    outline: none;
    padding: 0 5px;
    transition: all 0.2s linear;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    :focus {
      border-color: var(--btnColor);
    }
  }
`;
export const BlockCard = styled.div `
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: lightblue;
    border-radius: 10px;
  }
  width: 1180px;
  height: 487px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  margin-bottom: 96px;

  tbody {
    border-top: 1px solid #e6e6e6;
  }
  thead {
    height: 50px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: #fff;
    padding: 10px;
  }
`;