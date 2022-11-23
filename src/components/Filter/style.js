import styled from "styled-components";

export const Container = styled.div `
  max-width: 1180px;
  margin: 10px auto;
  display: flex;
  gap: 20px;
  /* Media */
  @media screen and (max-width: 1200px) and (min-width: 545px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) and (min-width: 545px) {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  @media screen and (max-width: 544px) {
    display: none;
  }
  input {
    width: 80%;
    border: 1px solid #e6e6e6;
    padding: 5px 10px;
    outline: none;
  }
`;
export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  /* Media */
  @media screen and (max-width: 1024px) and (min-width: 545px) {
    max-width: 500px !important;
    min-height: fit-content;
  }
  @media screen and (max-width: 768px) and (min-width: 545px) {
    max-width: 450px !important;
    min-height: fit-content;
    text-align: center;
  }
  @media screen and (max-width: 544px) {
    max-width: 300px !important;
    min-height: fit-content;
    text-align: center;
  }
`;
export const Fragment = styled.div `
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
  /* Media */
  @media screen and (max-width: 1024px) and (min-width: 992px) {
  }
  @media screen and (max-width: 991px) and (min-width: 545px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const BtnBlock = styled.div `
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  border-top: 1px solid #e6e6e6;
  padding: 20px 0;
`;
export const Title = styled.div `
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 10px;
`;