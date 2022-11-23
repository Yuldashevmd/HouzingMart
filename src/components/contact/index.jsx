import React from "react";
import { Block, Carousel, Contacts, Container, Wrapper } from "./style";
import Button from "../genericComp/Button";
import AliceCarousel from "react-alice-carousel";
import Apple from "../../assets/sponsors/apple.png";
import Wendy from "../../assets/sponsors/wendy.png";
const Contact = () => {
  return (
    <Container>
      <h1>Contact page</h1>
      <Wrapper>
        <Block>
          <h3>About us</h3>
          <p>
            Our company had invented in 2022, on July 16 and had been working
            till now. This website helps you to find your dream house or sell
            your house, and also helps to communicate with customer and seller
            via online without going to somewhere.
          </p>
          <p>
            We planned to improve our webapp during this year and complete with
            new features that increases UI.
          </p>
          <p>
            If you have any offer or complaint please send feedback that help
            website work without issue.
          </p>
          <form>
            <textarea />
            <Button type="primary" width="200px">
              Send Feedback
            </Button>
          </form>
        </Block>
        <Contacts>
          <div className="img"></div>
          <p>
            Founder of Houzing.com: <span>Yuldashev Muhammad</span>
          </p>
          <p>
            Contacts: <span>+99897 434 13 --</span>
          </p>
          <p>
            Telegram: <span>https://t.me/MukhammaDKhojA</span>
          </p>
          <p>
            Instagramm: <span>yuldashev_md</span>
          </p>
          <p>
            Facebook: <span>Yuldashev Muhammad</span>
          </p>
        </Contacts>
      </Wrapper>
      <Carousel>
        <h2>Our sponsors</h2>
        <AliceCarousel
          className="carouselWrap"
          disableButtonsControls={true}
          disableDotsControls={true}
          touchMoveDefaultEvents={true}
          mouseTracking={true}
          infinite={true}
          autoPlay={true}
          animationDuration={2000}
          responsive={{ 0: { items: 1 }, 1024: { items: 2 } }}
        >
          <div>
            <img src={Apple} alt="apple" />
          </div>
          <div>
            <img src={Wendy} alt="Wendy" />
          </div>
          <div>
            <img src={Apple} alt="apple" />
          </div>
          <div>
            <img src={Wendy} alt="Wendy" />
          </div>
          <div>
            <img src={Apple} alt="apple" />
          </div>
          <div>
            <img src={Wendy} alt="Wendy" />
          </div>
        </AliceCarousel>
      </Carousel>
    </Container>
  );
};

export default Contact;
