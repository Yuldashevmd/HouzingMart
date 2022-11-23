import styled from "styled-components";

export const ContactInfo = styled.div `
  width: 100%;
  min-height: 170px;
  margin-bottom: 4%;
  box-shadow: 0 0 5px rgb(209, 207, 207);
  border-radius: 4px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
  p {
    color: #0d263b;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
export const Form = styled.div `
  width: 100%;
  min-height: 201px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const FormUp = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
  input {
    width: 49%;
    border: none;
    border-bottom: 2px solid #e6e9ec;
    padding: 5px 2px;
    outline: none;
    /* media */
    @media screen and (max-width: 543px) {
      width: 100% !important;
      flex-direction: column !important;
      margin-bottom: 10px;
    }
    :focus {
      border-bottom: 2px solid lightblue;
      transition: all 0.1s linear;
    }
  }
`;
export const FormDown = styled.div `
  width: 100%;
  input {
    width: 100%;
    padding-bottom: 80px;
    border: none;
    border-bottom: 2px solid #e6e9ec;
    outline: none;
    :focus {
      border-bottom: 2px solid lightblue;
      transition: all 0.1s linear;
    }
  }
`;
export const Con2 = styled.form `
  width: 1180px;
  margin: auto;
  /* Media */
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    width: 80% !important;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 544px !important;
  }
  @media only screen and (max-width: 543px) {
    width: 99% !important;
  }
`;
export const Form2 = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const Block = styled.div `
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
  input {
    width: 100%;
    padding: 8px 2px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #e6e9ec;
    outline: none;
    :focus {
      border-bottom: 2px solid lightblue;
      transition: all 0.1s linear;
    }
  }
`;
export const Price = styled.div `
  height: 201px;
  display: flex !important;
  justify-content: space-between;
  align-items: space-around;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const AmenitiesBlog = styled.div `
  width: 780px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  /* Media */
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    width: 100% !important;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100% !important;
  }
  @media only screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column;
  }
`;
export const SelectInput = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
  input {
    width: 49%;
    padding: 8px 2px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #e6e9ec;
    outline: none;
    transition: all 0.3s linear;
    /* media */
    @media screen and (max-width: 543px) {
      width: 100% !important;
      flex-direction: column !important;
    }
    :focus {
      border-bottom: 2px solid lightblue;
    }
  }
`;
export const SubmitBtn = styled.button `
  width: 280px;
  height: 44px;
  margin-left: auto;
  margin-bottom: 15%;
  background-color: #0061df;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 2px;
  letter-spacing: 1.5px;
  /* media */
  @media screen and (max-width: 543px) {
    margin: auto !important;
    margin-bottom: 15% !important;
  }
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const BlockCheck = styled.div `
  height: 30px;
  display: flex;
  align-items: center;
  .checkbox {
    margin-right: 8px;
  }
`;
export const Input = styled.input `
  width: 100%;
  padding: 8px 2px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  outline: none;
  transition: all 0.3s linear;
  :focus {
    border-bottom: 2px solid lightblue;
    transition: all 0.1s linear;
  }
`;
export const Input2 = styled.input `
  width: 49%;
  padding: 8px 2px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  outline: none;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
  :focus {
    border-bottom: 2px solid lightblue;
    transition: all 0.1s linear;
  }
`;
export const PriceLeft = styled.div `
  width: 49%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const PriceRight = styled.div `
  width: 49%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const MediaImg = styled.div `
  display: flex;
  flex-direction: column;
  .media__img {
    display: flex;
    width: 550px;
    justify-content: space-between;
    flex-wrap: wrap;
    /* media */
    @media only screen and (max-width: 739px) and (min-width: 544px) {
      width: 100% !important;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 543px) {
      width: 100% !important;
      flex-wrap: wrap !important;
      justify-content: flex-start !important;
      gap: 5px 20px !important;
    }
    img {
      width: 120px;
      height: 120px;
      background: lightgrey;
      margin-top: 20px;
      object-fit: contain;
      cursor: pointer;
      transition: all 0.3s ease;
      :hover {
        filter: brightness(0.8);
      }
    }
  }
`;
export const MediaPart = styled.div `
  height: ${({ height }) => (height === "20" ? "20%" : null)};
  display: flex;
  flex-direction: column;
`;
export const MediaBtn = styled.input `
  width: 150px;
  height: 44px;
  margin: 20px 0;
  border: 2px solid #0061df;
  border-radius: 2px;
  color: #0061df;
  transition: all 0.2s linear;
  z-index: 999;
  :hover {
    cursor: pointer;
    opacity: 0.7;
    background: #1f7cf6;
    color: #fff;
  }
`;
export const Map = styled.div `
  width: 100%;
  height: 400px;
  background: grey;
`;
export const LongLat = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const Label = styled.label `
  font-size: 14px;
  color: #696969;
`;
export const Select = styled.select `
  width: ${(props) => (props.w === "half" ? "49%" : "100%")};
  height: 33.82px;
  padding: 8px 2px;
  border: none;
  border-bottom: 2px solid #e6e9ec;
  outline: none;
  margin: 10px 0;
  /* media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
    flex-direction: column !important;
  }
`;
export const H1 = styled.h1 `
  font-weight: 500;
  font-size: 28px;
  margin: 3% 0;
  /* Media */
  @media screen and (max-width: 1200px) and (min-width: 740px) {
    margin: 50px auto !important;
  }
  @media screen and (max-width: 543px) {
    font-size: 28px !important;
    margin-left: 20px !important;
  }
`;