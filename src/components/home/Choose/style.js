import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  min-height: 434px;
  margin: 96px auto;
  padding: 25px 0;
  background: #f5f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 22px;
    }
  }
  p {
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 12px;
    }
  }
`;
export const Wrapper = styled.div `
  max-width: 1180px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  /* media */
  @media screen and (max-width: 544px) {
    justify-content: center;
  }

  .block {
    width: 265px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    :hover .title,
    .describ {
      opacity: 0.7;
    }
    .title {
      font-size: 18px;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
    }
    .describ {
      font-size: 16px;
      font-weight: 400;
      transition: all 0.2s ease-in-out;
    }
    .icon {
      width: 45px;
      height: 45px;
      margin-bottom: 20px;
    }
    h5 {
      /* media */
      @media screen and (max-width: 544px) {
        font-size: 16px !important;
      }
    }
    p {
      /* media */
      @media screen and (max-width: 544px) {
        font-size: 12px !important;
      }
    }
  }
`;