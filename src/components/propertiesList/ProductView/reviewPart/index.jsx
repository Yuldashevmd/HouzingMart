import React from "react";
import { Block, Conatiner } from "./style";

const ReviewPart = () => {
  return (
    <Conatiner>
      <h3 className="header">4.67 (14 reviews)</h3>
      <div>
        <Block>
          <div className="range">
            <p>Cleanliness</p>
            <input type="range" />
          </div>
          <div className="range">
            <p>Communication</p>
            <input type="range" />
          </div>
          <div className="range">
            <p>Check-in</p>
            <input type="range" />
          </div>
          <img src="img" alt="img" />
          <p className="imgBelowText">Jane Cooper</p>
          <span className="span">April 6, 2021 at 3:21 AM</span>
          <p className="comment">
            Every single thing we tried with John was delicious! Found some
            awesome places we would definitely go back to on our trip. John was
            also super friendly and passionate about Beşiktaş and Istanbul.
          </p>
        </Block>
        <Block>
          <div className="range">
            <p>Cleanliness</p>
            <input type="range" />
          </div>
          <div className="range">
            <p>Communication</p>
            <input type="range" />
          </div>
          <div className="range">
            <p>Check-in</p>
            <input type="range" />
          </div>
          <img src="img" alt="img" />
          <p className="imgBelowText">Jane Cooper</p>
          <span className="span">April 6, 2021 at 3:21 AM</span>
          <p className="comment">
            Every single thing we tried with John was delicious! Found some
            awesome places we would definitely go back to on our trip. John was
            also super friendly and passionate about Beşiktaş and Istanbul.
          </p>
        </Block>
      </div>
    </Conatiner>
  );
};

export default ReviewPart;
