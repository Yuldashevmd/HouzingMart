import React from "react";
import { data } from "./mock-data";
import { Container, Wrapper } from "./style";

const Choose = () => {
  return (
    <Container>
      <h1 className="title">Why Choose Us</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Wrapper>
        {data?.map((item) => (
          <div key={item?.id} className="block">
            <img src={item?.icon} alt="icon" className="icon" />
            <h5 className="title">{item?.title}</h5>
            <p className="describ">{item?.paragh}</p>
          </div>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Choose;
