import React from "react";
import { useState } from "react";
import CardDiv from "../../genericComp/Card";
import AliceCarousel from "react-alice-carousel";
import { Container } from "./style";
import { useQuery } from "react-query";

const RecentProp = () => {
  const [dataItem, setDataItem] = useState();

  useQuery(
    "recommend",
    async () => {
      return await fetch(
        "https://houzing-app.herokuapp.com/api/v1/houses/list"
      ).then((res) => res.json());
    },
    {
      onSuccess: (res) => setDataItem(res?.data),
      onError: (err) => console.log(err),
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
  return (
    <Container>
      <h1 className="title">Recent Properties for Rent</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <AliceCarousel
        className="alice-carousel__prev-btn alice-carousel__next-btn"
        items={dataItem}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      >
        {dataItem?.map((item) => (
          <div className="center" key={item?.id}>
            <CardDiv info={item} />
          </div>
        ))}
      </AliceCarousel>
    </Container>
  );
};

export default RecentProp;
