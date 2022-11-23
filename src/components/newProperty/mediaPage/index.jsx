import React, { useState } from "react";
import { ContactInfo, MediaImg, MediaBtn, MediaPart, Input } from "../style";

const MediaPage = () => {
  const [img, setImg] = useState();
  const getFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => setImg(reader?.result);
  };
  return (
    <ContactInfo>
      <p>Media</p>
      <MediaImg>
        <span>Featured image</span>
        <div className="media__img">
          <img src={img} alt="1" />
          <img src={img} alt="2" />
          <img src={img} alt="3" />
          <img src={img} alt="4" />
        </div>
        <MediaBtn
          onChange={getFile}
          type="file"
          placeholder="Upload"
          accept="image/"
        />
      </MediaImg>
      <MediaPart height="20">
        <span>Gallery</span>
        <MediaBtn
          onChange={getFile}
          type="file"
          placeholder="Upload"
          accept="image/"
        />
      </MediaPart>
      <MediaPart>
        <span>Attachment</span>
        <span>
          <i className="fas fa-file"></i>
        </span>
        <MediaBtn
          onChange={getFile}
          type="file"
          placeholder="Upload"
          accept="image/"
        />
      </MediaPart>
      <MediaPart>
        <Input name="linkVideo" type="text" placeholder="Video link" />
        <Input
          name="virtualTour"
          type="text"
          placeholder="Virtual tour"
          style={{ paddingBottom: "12%" }}
        />
      </MediaPart>
    </ContactInfo>
  );
};

export default MediaPage;
