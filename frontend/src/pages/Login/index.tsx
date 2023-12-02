import React from "react";
import { NavBar } from "../../components/Header";
import styled from "styled-components";
import { Footer } from "../../components/Footer";

export function Login() {
  return (
    <PageWrapper>
      <Title>Bem vindo a cafeteria gourmet</Title>
      <div>
        <Text>Sou cliente</Text>
      </div>
      <Text>Sou gerente</Text>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-image: url("https://i.imgur.com/jDOuVh8.png");
  /* background-attachment: fixed; */
  background-size: cover;
  /* background-repeat: no-repeat; */
  position: fixed;
  /* width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(51, 51, 51, 0.7);
  z-index: 10; */
`;

const Title = styled.h1`
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 4rem;
`;

const Text = styled.p`
  padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 3rem;
`;

const Division = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;
`;
