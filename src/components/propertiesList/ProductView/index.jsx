import React, { useState } from "react";
import ButtonComp from "../../genericComp/Button";
import InputDiv from "../../genericComp/Input";
import DescribPart from "./describPart";
import FeaturesPart from "./featuresPart";
import ImgPart from "./imgPart";
import LocationPart from "./location";
import ReviewPart from "./reviewPart";
import SchedulePart from "./schedulePart";
import SimilarPart from "./similarList";
import { Conatiner, Detail, Content, Aside, Textarea } from "./style";
import WriteReviewPart from "./writeReview";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PropertyPart from "./propertyPart";

const ProductViewPage = () => {
  const { id } = useParams();
  const [response, setResponse] = useState();

  useQuery(
    "",
    () =>
      fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => setResponse(res),
      onError: (err) => console.log(err),
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <Conatiner>
      <ImgPart imgPath={response?.data?.attachments[0]?.imgPath} />
      <Detail>
        <Content>
          <DescribPart info={response?.data} />
          <hr />
          <LocationPart info={response?.data} />
          <hr />
          <PropertyPart info={response?.data} />
          <hr />
          <FeaturesPart />
          <hr />
          <SchedulePart />
          <hr />
          <ReviewPart />
          <hr />
          <WriteReviewPart />
          <SimilarPart />
        </Content>
        <Aside>
          <div className="person">
            <img src="#" alt="img" />
            <div>
              <p className="userName">
                {response?.data?.user?.firstname}
                {response?.data?.user?.lastname}
              </p>
              <p>{response?.data?.user?.email}</p>
            </div>
          </div>
          <InputDiv mt="10px" mb="10px" width="232px" placeholder="Name" />
          <InputDiv mt="10px" mb="10px" width="232px" placeholder="Phone" />
          <InputDiv mt="10px" mb="10px" width="232px" placeholder="Email" />
          <div>
            <label>Message</label>
            <Textarea placeholder="Enter your message" />
          </div>
          <div className="check">
            <input type="checkbox" />
            <p>By submitting this form I agree to Terms of Use</p>
          </div>
          <ButtonComp width="232px" type="primary">
            Send request
          </ButtonComp>
        </Aside>
      </Detail>
    </Conatiner>
  );
};

export default ProductViewPage;
