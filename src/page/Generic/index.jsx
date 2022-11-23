import React from "react";
import { GenericContainer } from "./style";

const Generic = () => {
  return (
    <GenericContainer>
      <h1>{window.location.pathname} is on proccess...</h1>
    </GenericContainer>
  );
};

export default Generic;
