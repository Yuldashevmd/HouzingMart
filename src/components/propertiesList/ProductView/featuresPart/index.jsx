import React from "react";
import { Block, Container } from "./style";
import Air from "../../../../assets/iconsSvg/iconsDetailPage/Air.svg";
import Barbeque from "../../../../assets/iconsSvg/iconsDetailPage/barbecue 1.svg";
import Dryer from "../../../../assets/iconsSvg/iconsDetailPage/Fen.svg";
import Gym from "../../../../assets/iconsSvg/iconsDetailPage/dumbbell.svg";
import Grass from "../../../../assets/iconsSvg/iconsDetailPage/grass.svg";
import Laundry from "../../../../assets/iconsSvg/iconsDetailPage/laundry.svg";
import Microwave from "../../../../assets/iconsSvg/iconsDetailPage/microwave.svg";
import OutShower from "../../../../assets/iconsSvg/iconsDetailPage/outdoor-shower.svg";
import Refrigirator from "../../../../assets/iconsSvg/iconsDetailPage/refrigerator.svg";
import Sauna from "../../../../assets/iconsSvg/iconsDetailPage/sauna.svg";
import Swimmer from "../../../../assets/iconsSvg/iconsDetailPage/swimmer.svg";
import Tv from "../../../../assets/iconsSvg/iconsDetailPage/coaxial.svg";
import Washer from "../../../../assets/iconsSvg/iconsDetailPage/liquid-soap.svg";
import Wifi from "../../../../assets/iconsSvg/iconsDetailPage/wifi.svg";
import Window from "../../../../assets/iconsSvg/iconsDetailPage/blinds.svg";
import Room from "../../../../assets/iconsSvg/iconsDetailPage/chair.svg";
const FeaturesPart = () => {
  return (
    <Container>
      <h2 className="header">Features</h2>
      <Block>
        <div className="block">
          <div className="iconDiv">
            <div>
              <img src={Air} alt="air" />
            </div>
            <p>Air Conditioning</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Barbeque} alt="air" />
            </div>
            <p>Barbeque</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Dryer} alt="air" />
            </div>
            <p>Dryer</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Gym} alt="air" />
            </div>
            <p>Gym</p>
          </div>
        </div>
        <div className="block">
          <div className="iconDiv">
            <div>
              <img src={Grass} alt="air" />
            </div>
            <p>Lawn</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Laundry} alt="air" />
            </div>
            <p>Laundry</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Microwave} alt="air" />
            </div>
            <p>Microwave</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={OutShower} alt="air" />
            </div>
            <p>Outdoor Shower</p>
          </div>
        </div>
        <div className="block">
          <div className="iconDiv">
            <div>
              <img src={Refrigirator} alt="air" />
            </div>
            <p>Refrigerator</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Sauna} alt="air" />
            </div>
            <p>Sauna</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Swimmer} alt="air" />
            </div>
            <p>Swimming Pool</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Tv} alt="air" />
            </div>
            <p>TV Cable</p>
          </div>
        </div>
        <div className="block">
          <div className="iconDiv">
            <div>
              <img src={Washer} alt="air" />
            </div>
            <p>Washer</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Wifi} alt="air" />
            </div>
            <p>WiFi</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Window} alt="air" />
            </div>
            <p>Window Coverings</p>
          </div>
          <div className="iconDiv">
            <div>
              <img src={Room} alt="air" />
            </div>
            <p>Dining room</p>
          </div>
        </div>
      </Block>
    </Container>
  );
};

export default FeaturesPart;
