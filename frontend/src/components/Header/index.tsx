import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";
import { ReactComponent as UserLogo } from "../../assets/userLogo.svg";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <div>
        <BrandLogo onClick={() => navigate("/")} />
      </div>
      <Teste>
        <NavItem onClick={() => navigate("/")}>Home</NavItem>
        <NavItem onClick={() => navigate("/favourites")}>
          Meus favoritos
        </NavItem>
        <NavItem onClick={() => navigate("/contact")}>Contato</NavItem>
      </Teste>
      <UserLogo onClick={() => navigate("/user")} />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.header`
  width: 100%;
  /* height: 70px; */
  height: 160px;
  /* padding: 0 0; */
  display: flex;
  justify-content: center;
  /* grid: 150px 150px; */
  /* gridt: 150px 150px; */
  place-items: center;
  /* grid-direction: columns; */
  /* grid-template-rows: 70px 70px 70px 70px; */
  position: relative;
  /* box-sizing: border-box; */
  background-color: #3d2923;
`;

const Teste = styled.div`
  width: 100%;
  max-width: 1112px;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  /* grid-template-columns: max-content 60%; */
  /* justify-content: space-between; */
  /* margin: 0 auto; */
  /* align-items: center; */
`;

const BrandLogo = styled(Logo)`
  width: 311px;
  height: 14rem;
  min-height: 60px;
  margin-top: 2rem;
  margin-right: 6rem;
  margin-left: 8rem;
  /* margin-left: -100rem; */
  padding: 2rem 0;
`;

const NavItem = styled.span`
  font-family: "Inter", sans-serif;"Inter", sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 40px;
  color: #bb7654;
`;
