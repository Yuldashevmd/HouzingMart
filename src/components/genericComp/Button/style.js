import styled from "styled-components";
import "../../../index.css";

const getType = (type) => {
    switch (type) {
        case "secondary":
            return { border: "1px  solid #e6e9ec", color: "#0D263B" };

        case "primary":
            return {
                background: "#0061df",
                border: "none",
                color: "#fff",
            };
        case "filter":
            return {
                border: "1px  solid #0D263B",
                color: "#0D263B",
            };
        default:
            return { color: "#fff", border: "1px solid #e6e9ec" };
    }
};

export const Button = styled.div `
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "44px")};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s linear;
  ${({ type }) => getType(type)};
  :active {
    transform: scale(0.97);
  }
  :hover {
    opacity: 0.9;
  }
`;