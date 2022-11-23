import styled from "styled-components";

export const ResponseText = styled.p `
  font-size: 14px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (props.text === 200 ? "lightgreen" : "red")} !important;
`;