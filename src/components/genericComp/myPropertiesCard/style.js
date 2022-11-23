import styled from "styled-components";
export const Table = styled.table `
  width: 100%;
  height: 100%;
`;
export const Tr = styled.tr `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  th:nth-child(1) {
    width: 40%;
    display: flex;
    justify-content: flex-start;
  }
  th {
    width: 13%;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: #0d263b;
    display: flex;
    justify-content: center;
  }
  td:nth-child(1) {
    width: 40%;
    display: flex;
    justify-content: flex-start;
  }
  td {
    width: 13%;
    display: flex;
    justify-content: center;
  }
`;
export const Card = styled.td `
  display: flex;
  align-items: center;
  gap: 0 16px;
`;
export const ImgSide = styled.div `
  width: 113px;
  height: 113px;
  background: url(${(props) => (props.bg ? props.bg : "lightgrey")});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  button {
    width: 71px;
    height: 23px;
    margin: 5px;
    background: #0061df;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 10px;
    border: none;
  }
`;
export const InfoSide = styled.div `
  height: 113px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .upInfo {
    width: 280px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .title {
      text-align: start;
      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #0d263b;
        margin: 0;
        cursor: pointer;
        transition: all 0.3s ease;
        :hover {
          opacity: 0.7;
        }
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #696969;
        margin: 0;
      }
    }
    button {
      width: 71px;
      height: 23px;
      background: #0d263b;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 10px;
      border: none;
    }
  }
  .downInfo {
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #0d263b;
      margin: 0;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      text-decoration-line: line-through;
      color: #696969;
      margin: 0;
    }
  }
`;
export const DivInfo = styled.td `
  text-align: center;
  p {
    color: #696969;
    margin: 0;
  }
`;
export const Action = styled.td `
  display: flex;
  align-items: center;
  gap: 0 22px;
  .pencil {
    width: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      opacity: 0.7;
    }
  }
  .trash {
    width: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      opacity: 0.7;
    }
  }
`;