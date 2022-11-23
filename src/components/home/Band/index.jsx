import React from "react";
import { Button } from "../../genericComp/Button/style";
import { Container, Wrapper } from "./style";

const Band = () => {
  return (
    <Container>
      <Wrapper>
        <h1>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </h1>
        <Button width="180px" type="primary" className="btn">
          Read more
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Band;
