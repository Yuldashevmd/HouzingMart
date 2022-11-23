import React, { useState } from "react";
import { useMutation } from "react-query";
import AdditionalPage from "./additionalPage";
import AmenitiesPage from "./amenitiesPage";
import ContactPage from "./contactPage";
import EnergyPage from "./energyPage";
import LocationPage from "./locationPage";
import MediaPage from "./mediaPage";
import PricePage from "./pricePage";
import { Con2, Form, SubmitBtn, H1 } from "./style";

const NewProperty = () => {
  const [data, setData] = useState();
  const [checked, setChecked] = useState();

  const { mutate } = useMutation(() => {
    return fetch("https://houzing-app.herokuapp.com/api/v1/houses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        address: "23,Bolynbroke",
        attachments: [
          {
            imgPath:
              "https://cdn.pixabay.com/photo/2022/08/02/01/12/airplane-7359232__340.jpg",
          },
        ],
        categoryId: 123,
        city: "Illinois",
        componentsDto: {
          additional: "string",
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        country: "Chicago",
        description: "string",
        homeAmenitiesDto: {
          additional: "string",
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 2,
          bath: 3,
          beds: 3,
          garage: 3,
          room: 6,
          yearBuilt: 2005,
        },
        locations: {
          latitude: 0,
          longitude: 0,
        },
        name: "Penthouse",
        price: 45000,
        region: "USA",
        salePrice: 35000,
        status: true,
        zipCode: 7005014,
        // address: data?.address,
        // attachments: [
        //   {
        //     imgPath:
        //       "https://cdn.pixabay.com/photo/2022/08/02/01/12/airplane-7359232__340.jpg",
        //   },
        // ],
        // categoryId: data?.categoryId,
        // city: "Uzbekistan",
        // componentsDto: {
        //   additional: "string",
        //   airCondition: true,
        //   courtyard: true,
        //   furniture: true,
        //   gasStove: true,
        //   internet: true,
        //   tv: true,
        // },
        // country: data?.country,
        // description: data?.description,
        // homeAmenitiesDto: {
        //   additional: "string",
        //   busStop: true,
        //   garden: true,
        //   market: true,
        //   park: true,
        //   parking: true,
        //   school: true,
        //   stadium: true,
        //   subway: true,
        //   superMarket: true,
        // },
        // houseDetails: {
        //   area: data?.area,
        //   bath: data?.bath,
        //   beds: data?.beds,
        //   garage: data?.garage,
        //   room: data?.room,
        //   yearBuilt: data?.yearBuilt,
        // },
        // locations: {
        //   latitude: data?.latitude,
        //   longitude: data?.longitude,
        // },
        // name: data?.name,
        // price: data?.price,
        // region: data?.region,
        // salePrice: data?.salePrice,
        // status: true,
        // zipCode: "string",
      }),
    });
  });
  const onSend = (e) => {
    e.preventDefault();
    mutate(
      {},
      {
        onSuccess: (res) => console.log(res),
        onError: (err) => console.log(err),
      }
    );
  };
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const isChecked = (e) =>
    setChecked({ ...checked, [e.target.name]: e.target.checked });

  return (
    <>
      <div className="NewProperty">
        <Con2>
          <H1>Add new property</H1>
          <ContactPage onChange={onChange} />
          <AdditionalPage onChange={onChange} />
          <PricePage onChange={onChange} />
          <LocationPage onChange={onChange} />
          <MediaPage />
          <AmenitiesPage onChange={isChecked} />
          <EnergyPage onChange={onChange} />
          <Form>
            <SubmitBtn onClick={onSend}>Save</SubmitBtn>
          </Form>
        </Con2>
      </div>
    </>
  );
};

export default NewProperty;
