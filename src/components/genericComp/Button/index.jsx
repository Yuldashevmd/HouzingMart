import React from "react";
import { Button } from "./style";

const ButtonComp = ({
  children,
  onClick,
  height,
  width,
  type,
  mr,
  ml,
  mb,
  mt,
}) => {
  return (
    <Button
      mr={mr}
      ml={ml}
      mb={mb}
      mt={mt}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;
