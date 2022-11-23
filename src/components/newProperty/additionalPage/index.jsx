import React from "react";
import { ContactInfo, Form2, Block, Input, Select } from "../style";

const AdditionalPage = ({ onChange }) => {
  return (
    <ContactInfo>
      <p>Additional</p>
      <Form2>
        <Block>
          <Input
            onChange={onChange}
            name="categoryId"
            type="text"
            placeholder="Property ID"
          />
          <Input
            onChange={onChange}
            name="label"
            type="text"
            placeholder="Label"
          />
          <Input
            onChange={onChange}
            name="beds"
            type="text"
            placeholder="Beds"
          />
          <Input
            onChange={onChange}
            name="yearBuilt"
            type="text"
            placeholder="Year build"
          />
          <Input
            onChange={onChange}
            name="areaLot"
            type="text"
            placeholder="Lot area(sqft)"
          />
        </Block>
        <Block>
          <Select name="block">
            <option value="Parent property">Parent property</option>
          </Select>
          <Input
            onChange={onChange}
            name="material"
            type="text"
            placeholder="Material"
          />
          <Input
            onChange={onChange}
            name="bath"
            type="text"
            placeholder="Bath"
          />
          <Input
            onChange={onChange}
            name="area"
            type="text"
            placeholder="Home area(sqft)"
          />
        </Block>
        <Block>
          <Select name="block">
            <option value="Parent property">Status</option>
          </Select>
          <Input
            onChange={onChange}
            name="rooms"
            type="text"
            placeholder="Rooms"
          />
          <Input
            onChange={onChange}
            name="garage"
            type="text"
            placeholder="Garages"
          />
          <Input
            onChange={onChange}
            name="lotDimension"
            type="text"
            placeholder="Lot dimensions"
            className="input"
          />
        </Block>
      </Form2>
    </ContactInfo>
  );
};

export default AdditionalPage;
