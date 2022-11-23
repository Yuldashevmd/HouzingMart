import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import CardCategory from "./CardCategory";
import { Container } from "./style";

const Category = () => {
  const [dataItem, setDataItem] = useState();

  useQuery(
    "category",
    () =>
      fetch("https://houzing-app.herokuapp.com/api/v1/categories/list").then(
        (res) => res.json()
      ),
    {
      onSuccess: (res) => setDataItem(res?.data),
      onError: (err) => console.log(err),
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <Container>
      <h1 className="title">Category</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <AliceCarousel
        className="alice-carousel__prev-btn alice-carousel__next-btn"
        items={[dataItem]}
        responsive={{
          0: {
            items: 1,
          },
          590: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      >
        {dataItem?.map((item) => (
          <div key={item?.id}>
            <CardCategory name={item?.name} />
          </div>
        ))}
      </AliceCarousel>
    </Container>
  );
};

export default Category;
