import styled from "styled-components";

// ========================================
export const Properties = styled.div`
  width: 1180px;
  margin: auto;

  /* Media */
  @media only screen and (max-width: 1200px) and (min-width: 950px) {
    width: 80%;
  }
  @media only screen and (max-width: 949px) and (min-width: 740px) {
    width: 80%;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 80%;
  }
  @media screen and (max-width: 543px) {
    width: 90%;
  }
`;
export const HeaderText = styled.div`
  margin: 5rem 0;
  text-align: center;
`;
export const Sort = styled.div`
  display: flex;
  justify-content: space-between;
  select {
    border: none;
    outline: none;
    font-size: 16px;
    color: #696969;
  }
  .sortSelect {
    border-bottom: 1px solid #e6e9ec;
    padding-bottom: 10px;
  }
`;
export const BtnShowDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BtnShow = styled.button`
  width: 250px;
  height: 44px;
  margin: 5% auto 10% auto;
  border-radius: 2px;
  background: #0061df;
  color: #fff;
  border: none;
  outline: none;
  transition: all 0.2s linear;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const CardWrap = styled.div`
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);

  p {
    margin-bottom: 0;
  }
  /* Media */
  @media only screen and (max-width: 1200px) and (min-width: 950px) {
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 949px) and (min-width: 740px) {
    width: 50%;
    margin: auto;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 543px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
