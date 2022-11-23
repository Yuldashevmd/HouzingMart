import React from "react";
import { Container, TextArea } from "./style";
import Input from "../../../genericComp/Input";
import Button from "../../../genericComp/Button";

const SchedulePart = () => {
  return (
    <Container>
      <h2 className="header">Schedule A Tour</h2>
      <div className="div">
        <Input width="430px" placeholder="Date" />
        <div className="time">
          <p>Time</p>
          <Input width="430px" placeholder="10:00 am" />
        </div>
      </div>
      <h3>Your Information</h3>
      <div>
        <Input width="280px" placeholder="Name" />
        <Input width="280px" placeholder="Phone" />
        <Input width="280px" placeholder="Email" />
      </div>
      <TextArea placeholder="Enter Your Message"></TextArea>
      <Button mb="48px" width="250px" type="primary">
        Submit a tour request
      </Button>
    </Container>
  );
};

export default SchedulePart;
