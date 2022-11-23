import styled from "styled-components";

export const Container = styled.div `
  width: 1180px;
  margin: 5rem auto;
  align-items: center;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 545px) {
    width: 80%;
  }
  @media screen and (max-width: 545px) {
    width: 80%;
  }
  h1 {
    color: var(--bgColor);
    margin: 2em 0;
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
  }
`;
export const Wrapper = styled.div `
  display: flex;
  justify-content: space-between;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 545px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 545px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Block = styled.div `
  width: 50%;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 545px) {
    width: 100%;
  }
  @media screen and (max-width: 545px) {
    width: 100%;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--bgColor);
  }
  p {
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 35px;
    color: grey;
  }
  form {
    textarea {
      width: 100%;
      height: 200px;
      margin: 30px 0 10px 0;
      resize: none;
      padding: 5px 10px;
      outline: none;
      border: 1px solid lightgrey;
      border-radius: 6px;
      font-size: 16px;
      color: grey;
      transition: all 0.2s linear;
      :focus {
        border-color: var(--btnColor);
        box-shadow: 0 2px 5px lightblue;
      }
    }
  }
`;
export const Contacts = styled.div `
  width: 40%;
  height: fit-content;
  border: 1px solid lightgrey;
  padding: 20px;
  /* Media */
  @media screen and (max-width: 1180px) and (min-width: 545px) {
    width: 100%;
    margin-top: 40px;
  }
  @media screen and (max-width: 545px) {
    width: 100%;
    margin-top: 40px;
    overflow: scroll;
  }
  .img {
    width: 100%;
    height: 350px;
    background-color: lightgrey;
    margin-bottom: 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      opacity: 0.8;
    }
  }
  p {
    font-weight: bold;
    user-select: none;
    span {
      font-weight: 500;
      user-select: text;
    }
  }
`;
export const Carousel = styled.div `
  h2 {
    font-size: 20px;
    font-weight: 600;
    color: var(--bgColor);
  }
  width: 100%;
  height: 250px;
  margin: 5rem 0 10rem 0;
  cursor: pointer;
  div {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    img {
      width: fit-content;
      height: 80%;
      user-select: none;
    }
  }
`;