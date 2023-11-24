import React from "react";
import styled from "styled-components";
import { CupcakeCard } from "../../components/CupcakeCard";
import { CupcakeList } from "../../components/CupcakeList";
import { NavBar } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <div>
      <NavBar />
      <CupcakeList />
      {/* <h1>Home</h1>
      <span>oi bebeb bebebe be ebb</span> */}
      <Footer />
    </div>
  );
}

const Teste = styled.div`
  display: grid;
`;
