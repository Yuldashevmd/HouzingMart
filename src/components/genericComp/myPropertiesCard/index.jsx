import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Action, Card, DivInfo, ImgSide, InfoSide, Tr } from "./style";
import { ReactComponent as Pencil } from "../../../assets/iconsSvg/pencil.svg";
import { ReactComponent as Trash } from "../../../assets/iconsSvg/trash.svg";
import { useNavigate } from "react-router-dom";

const MyPropertiesCard = ({ info }) => {
  const { confirm } = Modal;
  const navigate = useNavigate();
  const showDeleteConfirm = (id) => {
    confirm({
      title: "Are you sure delete this ads?",
      icon: <ExclamationCircleOutlined />,
      content: "Delete item",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        return fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "Application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => console.log(res));
      },
    });
  };

  return (
    <Tr>
      <Card>
        <ImgSide bg={info?.attachments[0]?.imgPath}>
          <button>FEATURED</button>
        </ImgSide>
        <InfoSide>
          <div className="upInfo">
            <div className="title">
              <h3 onClick={() => navigate(`/properties${info?.id}`)}>{`${
                info?.name || "This is title of house"
              }`}</h3>
              <p>{`${info?.address || "This is address of house"}`}</p>
            </div>
            <button>FOR SALE</button>
          </div>
          <div className="downInfo">
            <p>${`${info?.price || " 0.00"}`}</p>
            <h3>${`${info?.salePrice || " 0.00"}`}</h3>
          </div>
        </InfoSide>
      </Card>
      <DivInfo>
        <p>{`${info?.dataPublish || "dd.mm.yy"}`}</p>
      </DivInfo>
      <DivInfo>
        <p>{`${info?.status || "pending"}`}</p>
      </DivInfo>
      <DivInfo>
        <p>{`${info?.viewNumber || "0"}`}</p>
      </DivInfo>
      <Action>
        <Pencil className="pencil" />
        <Trash className="trash" onClick={() => showDeleteConfirm(info?.id)} />
      </Action>
    </Tr>
  );
};

export default MyPropertiesCard;
