import React, { useRef } from "react";
import {
  ArrowBtn,
  Arrows,
  Container,
  Content,
  ContentBlock,
  Icon,
  IconWrapper,
  Wrap,
} from "./style";
import { Carousel } from "antd";
import { home } from "../../../utils/home";
import { Button } from "../../genericComp/Button/style";

const CarouselPage = () => {
  const slider = useRef();

  return (
    <Container>
      <Carousel ref={slider} autoplay="true">
        {home?.map((item) => (
          <Content key={item?.id}>
            <Wrap
              bg={`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${item?.bgImg})`}
            >
              <ContentBlock>
                <h1>{item?.title}</h1>
                <p>{item?.p}</p>
                <IconWrapper>
                  <Icon>
                    <img src={item?.icon1} alt="bed" />
                    <p>{item?.bed}</p>
                  </Icon>
                  <Icon>
                    <img src={item?.icon2} alt="bed" />
                    <p>{item?.bath}</p>
                  </Icon>
                  <Icon>
                    <img src={item?.icon3} alt="bed" />
                    <p>{item?.garage}</p>
                  </Icon>
                  <Icon>
                    <img src={item?.icon4} alt="bed" />
                    <p>{item?.sqrt}</p>
                  </Icon>
                </IconWrapper>
                <h1>{item?.price}</h1>
                <Button className="btn" width="180px">
                  Read more
                </Button>
              </ContentBlock>
            </Wrap>
          </Content>
        ))}
      </Carousel>
      <Arrows>
        <ArrowBtn className="left" onClick={() => slider?.current?.prev()}>
          {"<"}
        </ArrowBtn>
        <ArrowBtn className="right" onClick={() => slider?.current?.next()}>
          {">"}
        </ArrowBtn>
      </Arrows>
    </Container>
  );
};

export default CarouselPage;
