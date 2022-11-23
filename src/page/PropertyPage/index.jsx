import React from "react";
import PropertiesList from "../../components/propertiesList/propertiesList";
import FilterPage from "../../components/Filter";
const PropertyWrap = () => {
  return (
    <>
      <FilterPage />
      <PropertiesList />
    </>
  );
};

export default PropertyWrap;
