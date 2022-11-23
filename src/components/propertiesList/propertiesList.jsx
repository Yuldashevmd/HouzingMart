import React, { Suspense, lazy, useState } from "react";
import {
  BtnShow,
  BtnShowDiv,
  CardWrap,
  HeaderText,
  Properties,
  Sort,
} from "./style";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import LazyLoading from "../genericComp/LazyLoader";

const PropertiesList = () => {
  const [dataItem, setDataItem] = useState();
  const { search } = useLocation();

  const Card = lazy(() => import("../genericComp/Card"));
  useQuery(
    [search],
    () => {
      return fetch(
        `https://houzing-app.herokuapp.com/api/v1/houses/list${search || ""}`
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
    <Properties>
      <HeaderText>
        <h1 className="title">Properties</h1>
        <p className="describ">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </HeaderText>
      <Sort>
        <p>{dataItem?.length} results</p>
        <div className="sortSelect">
          <span>Sort by:</span>
          <select name="sortBy">
            <option>Newest Listings</option>
          </select>
        </div>
      </Sort>
      <Suspense fallback={<LazyLoading />}>
        <CardWrap>
          {dataItem?.map((item) => (
            <div key={item?.id}>
              <Card info={item} />
            </div>
          ))}
        </CardWrap>
      </Suspense>
      <BtnShowDiv>
        <BtnShow>Show more</BtnShow>
      </BtnShowDiv>
    </Properties>
  );
};

export default PropertiesList;
