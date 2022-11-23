import {
  FooterM,
  FooterContainer,
  FooterLeft,
  FooterRight,
  FooterLinks,
  Img,
  Linki,
  Li,
  FooterLogo,
  FooterCopy,
  FooterAppUl,
  FooterDown,
  FooterBtn,
} from "./style";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Pin from "../../assets/iconsSvg/pin.svg";
import Email from "../../assets/iconsSvg/email 1.svg";
import Phone from "../../assets/iconsSvg/phone.svg";
import Face from "../../assets/iconsSvg/face.svg";
import Insta from "../../assets/iconsSvg/insta.svg";
import In from "../../assets/iconsSvg/in.svg";
import Twit from "../../assets/iconsSvg/twit.svg";

const Footer = () => {
  return (
    <>
      <FooterM>
        <FooterContainer>
          <FooterLeft>
            <p>Contact Us</p>
            <FooterLinks>
              <Linki>
                <Img src={Pin} />
                <p>
                  329 Queensberry Street, North Melbourne VIC 3051, Australia.
                </p>
              </Linki>
              <Linki>
                <Img src={Phone} />
                <p>123 456 7890</p>
              </Linki>
              <Linki>
                <Img src={Email} />
                <p>support@houzing.com</p>
              </Linki>
            </FooterLinks>
            <div className="footer__app">
              <FooterAppUl>
                <Li>
                  <img src={Face} alt="face" />
                </Li>
                <Li>
                  <img src={Twit} alt="twit" />
                </Li>
                <Li>
                  <img src={Insta} alt="insta" />
                </Li>
                <Li>
                  <img src={In} alt="in" />
                </Li>
              </FooterAppUl>
            </div>
          </FooterLeft>
          <FooterRight>
            <div className="footerBlock">
              <p>Discover</p>
              <ul>
                <li>Chicago</li>
                <li>Los Angelas</li>
                <li>Miami</li>
                <li>New York</li>
              </ul>
            </div>
            <div className="footerBlock">
              <p>Lists by Category</p>
              <ul>
                <li>Apartments</li>
                <li>Condos</li>
                <li>Houses</li>
                <li>Offices</li>
                <li>Retail</li>
                <li>Villas</li>
              </ul>
            </div>
            <div className="footerBlock">
              <p>Lists by Category</p>
              <ul>
                <li>About Us</li>
                <li>Terms & Conditions</li>
                <li>Support Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </FooterRight>
        </FooterContainer>
        <FooterDown>
          <FooterLogo>
            <Logo />
            <FooterCopy>
              <p style={{ color: " rgb(156, 155, 155)" }}>
                Copyright © 2021 CreativeLayers. All Right Reserved.
              </p>
              <FooterBtn> &uarr;</FooterBtn>
            </FooterCopy>
          </FooterLogo>
        </FooterDown>
      </FooterM>
    </>
  );
};

export { Footer };
