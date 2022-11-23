import React from "react";
import { Content, Describ, DocPart, Documents } from "./style";
import Beds from "../../../../assets/iconsSvg/bed.svg";
import Bath from "../../../../assets/iconsSvg/bath.svg";
import Garage from "../../../../assets/iconsSvg/car.svg";
import Sqrt from "../../../../assets/iconsSvg/ruler.svg";
import Heart from "../../../../assets/iconsSvg/love 1.svg";
import Share from "../../../../assets/iconsSvg/share.svg";

const DescribPart = ({ info }) => {
  return (
    <>
      <Content>
        <div className="text">
          <h1>Luxury Family Loft by Victoria Park</h1>
          <div className="icon">
            <div className="shareIcon">
              <div className="bgShare">
                <img src={Share} alt="share" />
              </div>
              <p>Share</p>
            </div>
            <div className="shareIcon">
              <div className="bgShare">
                <img src={Heart} alt="love" />
              </div>
              <p>Save</p>
            </div>
          </div>
        </div>
        <p>
          {info?.country}, {info?.city}
        </p>
        <div className="price">
          <p>${info?.price}/mo</p>
          <h1>${info?.salePrice}/mo</h1>
        </div>
        <div className="iconDiv">
          <div className="icons">
            <div className="icon">
              <img src={Beds} alt="beds" />
              <p>{info?.houseDetails?.beds} Beds</p>
            </div>
            <div className="icon">
              <img src={Bath} alt="beds" />
              <p>{info?.houseDetails?.bath} Bath</p>
            </div>
            <div className="icon">
              <img src={Garage} alt="beds" />
              <p>{info?.houseDetails?.garage} Garage</p>
            </div>
            <div className="icon">
              <img src={Sqrt} alt="sqrt" />
              <p>Sqrt</p>
            </div>
            <div className="icon">
              <img src={Beds} alt="beds" />
              <p>{info?.houseDetails?.yearBuilt} Year Built</p>
            </div>
          </div>
          <div>
            <p>Est. Mortgage</p>
          </div>
        </div>
      </Content>
      <Describ>
        <h2 className="header">Description</h2>
        <p>{info?.description}</p>
        <button className="showBtn">Show more</button>
      </Describ>
      <DocPart>
        <h2 className="header">Documents</h2>
        <Documents>
          <div className="download">
            <p>test_property.pdf</p>
            <button type="button">Download</button>
          </div>
          <div className="download">
            <p>test_property.pdf</p>
            <button type="button">Download</button>
          </div>
          <div className="download">
            <p>test_property.pdf</p>
            <button type="button">Download</button>
          </div>
        </Documents>
      </DocPart>
    </>
  );
};

export default DescribPart;
