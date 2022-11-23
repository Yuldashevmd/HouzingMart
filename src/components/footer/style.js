import styled from "styled-components";

export const FooterM = styled.div `
  width: 100%;
  min-height: 417px;
  background: #0d263b;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    height: fit-content !important;
    padding: 2rem 0;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    height: fit-content !important;
    padding: 2rem 0;
  }
  @media screen and (max-width: 543px) {
    height: fit-content !important;
    padding: 2rem 2rem;
  }
`;
export const FooterContainer = styled.div `
  width: 1180px;
  margin: 48px auto 24px auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    width: 90% !important;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 544px !important;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media screen and (max-width: 543px) {
    width: 90% !important;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const FooterLeft = styled.div `
  height: 90%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    .footerApp {
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    .footerApp {
      margin-bottom: 2rem;
    }
  }
  @media screen and (max-width: 543px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;
export const FooterRight = styled.div `
  width: 60%;
  display: flex;
  height: 50%;
  justify-content: space-between;
  @media only screen and (max-width: 1190px) and (min-width: 740px) {
    margin-bottom: 2rem !important;
    .footerBlock {
      p {
        margin-bottom: 20px !important;
      }
    }
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100% !important;
    margin-bottom: 2rem !important;
    .footerBlock {
      p {
        margin-bottom: 20px !important;
      }
    }
  }
  @media only screen and (max-width: 543px) {
    flex-direction: column !important;

    .footerBlock {
      margin-bottom: 2rem;
      p {
        margin-bottom: 25px !important;
      }
      li {
        margin: 15px 0 !important;
      }
    }
  }

  .footerBlock {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    color: #fff;

    ul {
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0;
      li {
        margin-bottom: 14px;
        opacity: 0.5;
        transition: all 0.2s linear;
        :hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }
`;
export const FooterLinks = styled.div `
  width: 70%;
`;
export const Linki = styled.div `
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  p {
    opacity: 0.5;
    transition: all 0.2s linear;
    margin: 0;
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
export const Img = styled.img `
  margin-right: 20px;
`;
export const FooterAppUl = styled.div `
  width: 200px;
  display: flex;
  justify-content: space-between;
  /* media */
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    margin-bottom: 2rem;
  }
`;
export const Li = styled.div `
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background: rgba(189, 189, 189, 0.649);
  }
`;
export const FooterDown = styled.div `
  border-top: 0.5px solid rgb(118, 117, 117);
`;
export const FooterLogo = styled.div `
  width: 1180px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) and (min-width: 740px) {
    width: 740px !important;
    flex-direction: column;
  }
  @media screen and (max-width: 739px) and (min-width: 544px) {
    width: 544px !important;
    flex-direction: column;
  }
  @media screen and (max-width: 543px) {
    width: 90% !important;
    display: flex !important;
    flex-direction: column !important;
    text-align: center !important;
  } ;
`;
export const FooterCopy = styled.div `
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 543px) {
    width: 100% !important;
    /* margin-top: 20px; */
  }
`;
export const FooterBtn = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  color: #fff;
  background: #0061df;
  border-radius: 4px;
  @media screen and(max-width:543px) {
    width: 80px !important;
  }
  :hover {
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s linear;
  }
`;