import React from "react";
import { Container, BlockCard, Title } from "./style";
import { Table, Tr } from "../../genericComp/myPropertiesCard/style";
import MyPropertiesCard from "../../genericComp/myPropertiesCard";
import { useQuery } from "react-query";
import { useState } from "react";
const UserProperties = () => {
  const [houses, setHouses] = useState();
  useQuery(
    [houses],
    () =>
      fetch("https://houzing-app.herokuapp.com/api/v1/houses/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => setHouses(res?.data),
      onError: (err) => console.log(err),
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );
  return (
    <Container>
      <Title>
        <h1>My properties</h1>
        <input placeholder="Search" />
      </Title>
      <BlockCard>
        <Table>
          <thead>
            <Tr>
              <th className="listing__title">Listing Title</th>
              <th>Data Published</th>
              <th>Status</th>
              <th>View</th>
              <th>Action</th>
            </Tr>
          </thead>
          {houses?.map((item) => (
            <tbody key={item?.id}>
              <MyPropertiesCard info={item} />
            </tbody>
          ))}
        </Table>
      </BlockCard>
    </Container>
  );
};

export default UserProperties;
