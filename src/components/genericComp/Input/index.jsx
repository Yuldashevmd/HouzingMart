import React, { forwardRef } from "react";
import { Input, Wrapper } from "./style";

const InputDiv = forwardRef(
  (
    {
      children,
      type,
      onChange,
      mr,
      ml,
      mb,
      mt,
      value,
      name,
      defaultValue,
      placeholder,
      width,
      height,
      border,
    },
    ref
  ) => {
    return (
      <Wrapper
        mr={mr}
        ml={ml}
        mb={mb}
        mt={mt}
        width={width}
        height={height}
        border={border}
      >
        {children}
        <Input
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

export default InputDiv;
