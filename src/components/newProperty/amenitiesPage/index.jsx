import React from "react";
import { ContactInfo, AmenitiesBlog, BlockCheck, Label } from "../style";

const AmenitiesPage = ({ isChecked }) => {
  return (
    <ContactInfo>
      <p>Amenities</p>
      <AmenitiesBlog>
        <div className="blog">
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="airCondition"
              className="checkbox"
            />
            <Label name="airCondition">Air conditioning</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="courtyard"
              className="checkbox"
            />
            <Label name="courtyard">Barbeque</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="gasStove"
              className="checkbox"
            />
            <Label name="gasStove">Dryer</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="furniture"
              className="checkbox"
            />
            <Label name="furniture">Gym</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="internet"
              className="checkbox"
            />
            <Label name="internet">Laundry</Label>
          </BlockCheck>
        </div>
        <div className="blog">
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="tv"
              className="checkbox"
            />
            <Label name="tv">Lawn</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="microwave"
              className="checkbox"
            />
            <Label name="microwave">Microwave</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="outdoor"
              className="checkbox"
            />
            <Label name="outdoor">Outdoor Shower</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="refrigerator"
              className="checkbox"
            />
            <Label name="refrigerator">Refrigerator</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="stunningView"
              className="checkbox"
            />
            <Label name="stunningView">Stunning views</Label>
          </BlockCheck>
        </div>
        <div className="blog">
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="dinningRoom"
              className="checkbox"
            />
            <Label name="dinningRoom">Dining Room</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="fireplace"
              className="checkbox"
            />
            <Label name="fireplace">Fireplace</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="pets"
              className="checkbox"
            />
            <Label name="pets">Pets Allowed</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="washer/dryer"
              className="checkbox"
            />
            <Label name="washer/dryer">Unit Washer/Dryer</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="onsiteparking"
              className="checkbox"
            />
            <Label name="onsiteparking">Onsite Parking</Label>
          </BlockCheck>
        </div>
        <div className="blog">
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="waterfront"
              className="checkbox"
            />
            <Label name="waterfront">Waterfront</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="parking"
              className="checkbox"
            />
            <Label name="parking">Parking</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="doorman"
              className="checkbox"
            />
            <Label name="doorman">Doorman</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="heating"
              className="checkbox"
            />
            <Label name="heating">Central Heating</Label>
          </BlockCheck>
          <BlockCheck>
            <input
              onChange={isChecked}
              type="checkbox"
              name="service"
              className="checkbox"
            />
            <Label name="service">Cleaning Service</Label>
          </BlockCheck>
        </div>
      </AmenitiesBlog>
    </ContactInfo>
  );
};

export default AmenitiesPage;
