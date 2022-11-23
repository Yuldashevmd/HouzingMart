import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
Container.MainImg = styled.img `
  width: 580px;
  height: 400px !important;
  background: rgba(11, 11, 11, 0.9);
`;
Container.PartyImg = styled.div `
  width: 580px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
export const Part = styled.img `
  width: 280px;
  height: 190px;
  background: rgba(11, 11, 11, 0.9);
`;