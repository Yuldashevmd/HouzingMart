import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div `
  width: 100%;
  height: 64px;
  background: #0d263b;
`;
export const Container = styled.div `
  width: 1180px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .hamburBtn {
    display: none;
    /* media */
    @media screen and (max-width: 544px) {
      font-size: 25px;
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
      background: transparent;
      color: #fff;
      border: none;
      outline: none;
      padding: 5px;
    }
  }
  /* media */
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    width: 80%;
  }
  @media only screen and (max-width: 740px) and (min-width: 544px) {
    width: 544px;
  }
  @media screen and (max-width: 544px) {
    width: 90%;
    justify-content: space-evenly;
  }
`;
export const LinkWrap = styled.div `
  width: 38%;
  display: flex;
  /* Media */
  @media only screen and (max-width: 757px) and (min-width: 544px) {
    width: 50%;
  }
`;
export const Ul = styled.div `
  margin: auto;
  display: flex;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  @media only screen and (max-width: 878px) and (min-width: 544px) {
    font-size: 12px !important;
  }
  .active {
    color: #0061df;
  }
  @media screen and (max-width: 543px) {
    display: none;
  }
`;
Ul.a = styled(NavLink)
`
  color: white;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
    transition: all 0.3s ease-out;
  }
`;

export const SignedUser = styled.div `
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 25px;
    transition: all 0.2s linear;
    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
export const UlUser = styled.ul `
  width: 150px;
  border-radius: 8px;
  flex-direction: column;
  margin-bottom: 10px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px 0;
    background: whitesmoke;
    :hover {
      background: lightskyblue;
      color: #fff;
      border-radius: 8px;
    }
  }
`;