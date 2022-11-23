import styled from "styled-components";

// vars
const color = `
color: #0D263B;
`;
// start
export const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.div `
  width: 580px;
  min-height: 376px;
  padding: 30px;
  margin: 5rem 0;
  border-radius: 3px;
  background: #fff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Media */
  @media screen and (max-width: 596px) and (min-width: 545px) {
    width: 90%;
  }
  @media screen and (max-width: 544px) {
    width: 80%;
  }
  p {
    ${color};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .btn-regis {
    border: none;
    background: transparent;
    color: blue;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export const Form = styled.div `
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;
LoginForm.InputForm = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  .error {
    font-size: 12px;
    color: red;
  }
  label {
    ${color};
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
export const Input = styled.input `
  width: 100%;
  height: 40px;
  ${color};
  border: none;
  border-bottom: ${(props) =>
    props.valid ? "2px solid #E6E9EC" : "2px solid red"};
  outline: none;
  transition: all 0.2s linear;
  :focus {
    border-color: #0061df;
  }
`;
export const CheckForget = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Media */
  @media screen and (max-width: 596px) and (min-width: 545px) {
    flex-direction: column;
  }
  @media screen and (max-width: 544px) {
    flex-direction: column;
  }
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0061df;
    border: none;
    background: transparent;
    cursor: pointer;
    :hover {
      color: #006500;
    }
  }
`;
CheckForget.Check = styled.div `
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #696969;
    user-select: none;
  }
`;
export const Button = styled.button `
  width: 520px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0061df;
  border: none;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  margin-top: 20px;
  /* Media */
  @media screen and (max-width: 596px) and (min-width: 545px) {
    width: 100%;
  }
  @media screen and (max-width: 544px) {
    width: 100%;
  }
  :hover {
    cursor: pointer;
  }
  :active {
    transform: scale(0.99);
  }
`;
export const ResponseText = styled.p `
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  color: ${(props) =>
    props.text === "Successfull..." ? "lightgreen" : "red"} !important;
`;