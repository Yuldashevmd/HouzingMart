import React from "react";
import AliceCarousel from "react-alice-carousel";
import CommentCard from "../../genericComp/CommentCard";
import { comments } from "./mock-data";
import { Container, Wrapper } from "./style";

const TestEmotion = () => {
  return (
    <Container>
      <h1 className="title">Testimonials</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <Wrapper>
        <AliceCarousel
          items={comments}
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
          className="alice-carousel__prev-btn alice-carousel__next-btn"
        >
          {comments.map((item) => (
            <div key={item?.id}>
              <CommentCard
                person={item?.person}
                comment={item?.comment}
                status={item?.status}
              />
            </div>
          ))}
        </AliceCarousel>
      </Wrapper>
    </Container>
  );
};

export default TestEmotion;
