import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  ContactInfo,
  Form,
  FormUp,
  Select,
  LongLat,
  Input2,
  Input,
} from "../style";

const LocationPage = ({ onChange }) => {
  const [markedLocation, setMarkedLocation] = useState({
    lat: 41.311081,
    lng: 69.240562,
  });
  const Mark = (e) =>
    setMarkedLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  return (
    <ContactInfo>
      <p>Location</p>
      <Form>
        <FormUp>
          <Select w="half">
            <option>Regions</option>
          </Select>
          <Input
            onChange={onChange}
            name="address"
            type="text"
            placeholder="Friendly address"
            required
          />
        </FormUp>
        <Input
          onChange={onChange}
          name="location"
          type="number"
          placeholder="Map location"
        />
        <LoadScript googleMapsApiKey="AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            zoom={10}
            center={{ lat: 41.311081, lng: 69.240562 }}
            onClick={Mark}
          >
            <Marker position={markedLocation} />
          </GoogleMap>
        </LoadScript>
        <LongLat>
          <Input2
            onChange={onChange}
            name="latitude"
            type="number"
            placeholder="Latidude"
          />
          <Input2
            onChange={onChange}
            name="longitude"
            type="number"
            placeholder="Logtitude"
          />
        </LongLat>
      </Form>
    </ContactInfo>
  );
};

export default LocationPage;
