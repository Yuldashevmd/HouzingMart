import React from "react";
import Logo from "../../assets/logo.svg";
import { Container, LinkWrap, Nav, SignedUser, Ul, UlUser } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import userSvg from "../../assets/Login.svg";
import { navbar } from "../../utils/Navbar";
import { user } from "../../utils/user";
import ButtonComp from "./../genericComp/Button/index";
import { Footer } from "../footer";
import { Popover } from "antd";
const Navbar = () => {
  const navigate = useNavigate();
  const content = () => {
    return user.map((item) => (
      <UlUser key={item.id}>
        <li onClick={() => navigate(item.path)}>{item?.title}</li>
      </UlUser>
    ));
  };
  const Aside = () => {
    return navbar.map((item) => (
      <UlUser key={item.id}>
        <li onClick={() => navigate(item.path)}>{item?.title}</li>
      </UlUser>
    ));
  };
  return (
    <>
      <Nav>
        <Container>
          <img
            style={{ cursor: "pointer" }}
            src={Logo}
            onClick={() => navigate("/")}
            alt="img"
          />
          <LinkWrap>
            {navbar?.map((item) => (
              <Ul key={item.id}>
                <Ul.a to={item.path}>{item.title}</Ul.a>
              </Ul>
            ))}
          </LinkWrap>
          {localStorage.getItem("token") ? (
            <>
              <Popover
                trigger="click"
                placement="bottomRight"
                content={content}
              >
                <div>
                  <SignedUser>
                    <img src={userSvg} alt="1" />
                  </SignedUser>
                </div>
              </Popover>
            </>
          ) : (
            <ButtonComp
              width={"131px"}
              onClick={() => navigate("/login")}
              className="loginBtn"
            >
              Login
            </ButtonComp>
          )}
          <Popover trigger="click" placement="bottomRight" content={Aside}>
            <button className="hamburBtn">=</button>
          </Popover>
        </Container>
      </Nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
