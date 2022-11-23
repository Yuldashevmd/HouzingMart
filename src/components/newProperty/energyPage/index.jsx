import React from "react";
import { ContactInfo, SelectInput } from "../style";

const EnergyPage = ({ onChange }) => {
  return (
    <ContactInfo>
      <p>Select Energy Class</p>
      <SelectInput>
        <input
          onChange={onChange}
          name="energyClass"
          type="text"
          placeholder="Energy class"
          className="energyClass"
        />
        <input
          onChange={onChange}
          name="energyIndex"
          type="number"
          placeholder="Energy Index in kWh/m2a"
          className="energyIndex"
        />
      </SelectInput>
    </ContactInfo>
  );
};

export default EnergyPage;
