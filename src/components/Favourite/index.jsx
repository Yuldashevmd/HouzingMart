import React, { useState } from "react";
import { useQuery } from "react-query";
import { Block, Container } from "./style";
import Card from "../genericComp/Card";

const FavouritePage = () => {
  const [data, setData] = useState();

  useQuery(
    "",
    () =>
      fetch(
        "https://houzing-app.herokuapp.com/api/v1/houses/getAll/favouriteList",
        {
          method: "GET",
          headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((res) => res.json()),
    {
      onSuccess: (res) => setData(res?.data),
      onError: (err) => console.log(err),
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <Container>
      <h1 className="title">Favourite</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Block>
        {data?.map((item) => (
          <div key={item?.id}>
            <Card info={item} />
          </div>
        ))}
      </Block>
    </Container>
  );
};

export default FavouritePage;
