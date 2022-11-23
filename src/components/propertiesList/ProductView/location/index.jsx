import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";
import { Conatiner } from "./style";
import { Text } from "./style";

const LocationPart = ({ info }) => {
  return (
    <Conatiner>
      <h2 className="header">Location</h2>
      <Text>
        <div>
          <p>Address:</p>
          <span>{info?.address}</span>
        </div>
        <div>
          <p>City:</p>
          <span>{info?.city}</span>
        </div>
        <div>
          <p>Area:</p>
          <span>{info?.region}</span>
        </div>
      </Text>
      <Text>
        <div>
          <p>State/County:</p>
          <span>{info?.country}</span>
        </div>
        <div>
          <p>Zip:</p>
          <span>{info?.zipCode}</span>
        </div>
        <div>
          <p>Country:</p>
          <span>{info?.country}</span>
        </div>
      </Text>
      <LoadScript googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4">
        <GoogleMap
          zoom={12}
          center={{
            lat: info?.location?.latitude,
            lng: info?.location?.longitude,
          }}
          mapContainerStyle={{ width: "100%", height: "416px" }}
        >
          <Marker
            position={{
              lat: info?.location?.latitude,
              lng: info?.location?.longitude,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </Conatiner>
  );
};

export default LocationPart;
