import React from "react";
import { Block, Container } from "./style";

const PropertyPart = ({ info }) => {
  return (
    <Container>
      <h2 className="header">Property Details</h2>
      <Block>
        <div className="block">
          <div>
            <p>Property ID:</p>
            <span>{info?.categoryId || "-"}</span>
          </div>
          <div>
            <p>Price:</p>
            <span>{info?.price || "-"}</span>
          </div>
          <div>
            <p>Property Size:</p>
            <span>{info?.houseDetails?.area || "-"}</span>
          </div>
          <div>
            <p>Year Bulit:</p>
            <span>{info?.houseDetails?.yearBuilt || "-"}</span>
          </div>
        </div>
        <div className="block">
          <div>
            <p>Bedrooms:</p>
            <span>{info?.houseDetails?.beds || "-"}</span>
          </div>
          <div>
            <p>Bathrooms:</p>
            <span>{info?.houseDetails?.bath || "-"}</span>
          </div>
          <div>
            <p>Garage:</p>
            <span>{info?.houseDetails?.garage || "-"}</span>
          </div>
          <div>
            <p>Garage size:</p>
            <span>{info?.garageSize || "-"}</span>
          </div>
        </div>
        <div className="block">
          <div>
            <p>Property Type:</p>
            <span>{info?.name || "-"}</span>
          </div>
          <div>
            <p>Property Status:</p>
            <span>{info?.status || "-"}</span>
          </div>
        </div>
      </Block>
    </Container>
  );
};

export default PropertyPart;
