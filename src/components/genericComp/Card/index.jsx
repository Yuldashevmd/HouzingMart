import React, { useState } from "react";
import {
  Block,
  BlockSale,
  BlockText,
  Button,
  Icon,
  Img,
  TextFooter,
  TextIcons,
  TextParagh,
} from "./style";
import Beds from "../../../assets/iconsSvg/bed.svg";
import Bath from "../../../assets/iconsSvg/bath.svg";
import Car from "../../../assets/iconsSvg/car.svg";
import Ruler from "../../../assets/iconsSvg/ruler.svg";
import Resize from "../../../assets/iconsSvg/resize 1.svg";
import Love from "../../../assets/iconsSvg/love 1.svg";
import PersonImg from "../../../assets/photoPerson.png";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const CardDiv = ({ info }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const { mutate } = useMutation(() => {
    return fetch(
      `https://houzing-app.herokuapp.com/api/v1/houses/addFavourite/${
        id ? id : ""
      }?favourite=true`,
      {
        method: "PUT",
        headers: {
          "Content-type": "Application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          id: "",
        }),
      }
    ).then((res) => res.json());
  });
  const addFavourite = (id) => {
    setId(id ? id : null);
    setTimeout(
      () =>
        mutate(
          {},
          {
            onSuccess: (res) => alert(res?.message),
            onError: (err) => console.log(err),
          }
        ),
      1500
    );
  };

  return (
    <div>
      <Block>
        <Img>
          <img src={info?.attachments[0].imgPath} alt="img" />
        </Img>
        <BlockSale>
          <div className="sale__btn">
            <Button color="blue">FEATURED</Button>
            <Button color="grey">FOR SALE</Button>
          </div>
          <div className="sale__img">
            <img src={PersonImg} alt="img" />
          </div>
        </BlockSale>
        <BlockText>
          <TextParagh>
            <h3 onClick={() => navigate(`/properties${info?.id}`)}>
              {info?.address || "Title"}
            </h3>
            <p>{info?.description || "Paragh"}</p>
          </TextParagh>
          <TextIcons>
            <Icon>
              <img src={Beds} alt="beds" />
              <span>{info?.houseDetails?.beds || 0} Beds</span>
            </Icon>
            <Icon>
              <img src={Bath} alt="bath" />
              <span>{info?.houseDetails?.bath || 0} Baths</span>
            </Icon>
            <Icon>
              <img src={Car} alt="car" />
              <span>{info?.houseDetails?.car || 0} Garage</span>
            </Icon>
            <Icon>
              <img src={Ruler} alt="ruler" />
              <span>{info?.houseDetails?.area || 0} Sq Ft</span>
            </Icon>
          </TextIcons>
          <hr style={{ opacity: "0.4", background: "grey" }} />
          <TextFooter>
            <div className="footer__price">
              <p style={{ textDecoration: "line-through" }}>
                {info?.oldPrice || "$0.00"}
              </p>
              <span style={{ color: "#0D263B", fontWeight: "bold" }}>
                {`$ ${info?.price}` || "$0.00"}
              </span>
            </div>
            <div className="footer__i">
              <img src={Resize} alt="resize" />
              <img
                src={Love}
                alt="loveicon"
                className="tag"
                onClick={() => addFavourite(info?.id)}
              />
            </div>
          </TextFooter>
        </BlockText>
      </Block>
    </div>
  );
};

export default CardDiv;
