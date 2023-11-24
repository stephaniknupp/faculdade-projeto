import React from "react";
import styled from "styled-components";
import { CupcakeCard } from "../CupcakeCard";

export const CupcakeList = () => {
  return (
    <CupcakeListContainer>
      {/* ssada */}
      {/* teste */}
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
      <CupcakeCard />
    </CupcakeListContainer>
  );
};

const CupcakeListContainer = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  row-gap: 30px;
`;
