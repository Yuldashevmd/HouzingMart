import React from "react";
import { Card, Container } from "./style";
import PersonImg from "../../../assets/photoPerson2.png";

const CommentCard = ({ comment, person, status }) => {
  return (
    <Container>
      <Card>{comment}</Card>
      <img src={PersonImg} alt="img" />
      <p className="person">{person}</p>
      <p>{status}</p>
    </Container>
  );
};

export default CommentCard;
