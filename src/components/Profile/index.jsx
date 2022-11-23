import React from "react";
import { Container } from "./style";
import Button from "../genericComp/Button";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    return setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <Container>
      <h1 className="title">Profile</h1>
      <Button onClick={() => navigate("/addpost")} width="180px" type="primary">
        Add Post
      </Button>
      <Button onClick={logOut} width="180px" type="primary">
        Log out
      </Button>
    </Container>
  );
};

export default Profile;
