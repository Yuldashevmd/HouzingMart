import React from "react";
import { ContactInfo, Price, PriceLeft, PriceRight, Input } from "../style";

const PricePage = ({ onChange }) => {
  return (
    <ContactInfo>
      <p>Price</p>
      <Price>
        <PriceLeft>
          <Input
            onChange={onChange}
            name="price"
            type="number"
            placeholder="Price ($)"
          />
          <Input
            onChange={onChange}
            name="salePrice"
            type="number"
            placeholder="Price Suffix"
          />
        </PriceLeft>
        <PriceRight>
          <Input
            onChange={onChange}
            name="pricePre"
            type="number"
            placeholder="Price Prefix"
          />
          <Input
            onChange={onChange}
            name="PriceCus"
            type="number"
            placeholder="Price Custom"
          />
        </PriceRight>
      </Price>
    </ContactInfo>
  );
};

export default PricePage;
