import React from "react";
import ButtonComp from "../../../genericComp/Button";
import Input from "../../../genericComp/Input";
import { Container } from "./style";

const WriteReviewPart = () => {
  return (
    <Container>
      <h3 className="header">Write a Review</h3>
      <div className="blockWrap">
        <div className="block">
          <div>
            <p>Cleanliness</p>
            <i>I</i>
          </div>
          <div>
            <p>Cleanliness</p>
            <i>I</i>
          </div>
          <div>
            <p>Cleanliness</p>
            <i>I</i>
          </div>
        </div>
        <div className="block">
          <div>
            <p>Cleanliness</p>
            <i>I</i>
          </div>
          <div>
            <p>Cleanliness</p>
            <i>I</i>
          </div>
          <div>
            <p>Cleanliness</p>
            <i>I</i>
          </div>
        </div>
      </div>
      <div className="input">
        <Input width="430px" placeholder="Name" />
        <div>
          <label htmlFor="email">Email</label>
          <Input width="430px" name="email" placeholder="Email" type="email" />
        </div>
      </div>
      <textarea placeholder="Enter Your Message"></textarea>
      <ButtonComp width="250px" type="primary">
        Send your review
      </ButtonComp>
    </Container>
  );
};

export default WriteReviewPart;
