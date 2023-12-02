import React, { useEffect } from "react";
import styled from "styled-components";
import { CupcakeCard } from "../CupcakeCard";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Logo } from "../../assets/logoBg.svg";
import { ReactComponent as HeartSymbolIcon } from "../../assets/gray-heart.svg";
import { ReactComponent as HeartFilledSymbolIcon } from "../../assets/filled-heart.svg";

export const CupcakeList = () => {
  // fetch("http://localhost:3000/api/getAll").then((response) => {
  //   console.log(response);
  // });

  const [post, setPost] = React.useState([
    {
      id: "",
      name: "...",
      description: "...",
      stock: 1,
      imgUrl: "shajd",
      price: 0,
      isFavorite: false,
    },
    {
      id: "",
      name: "...",
      description: "...",
      stock: 1,
      imgUrl: "shajd",
      price: 0,
      isFavorite: false,
    },
    {
      id: "",
      name: "...",
      description: "...",
      stock: 1,
      imgUrl: "shajd",
      price: 0,
      isFavorite: false,
    },
  ]);

  const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  // const cafeList: [{ name: string }]  = axios
  //   .get("http://localhost:3000/api/getAll")
  //   .then((res) => {
  //     return res.data;
  //   });

  type Cupcake = {
    id: string;
    name: string;
    description: string;
    stock: number;
    imgUrl: string;
    price: number;
    isFavorite: boolean;
  };

  useEffect(() => {
    api.get("/getAll").then((response: AxiosResponse<Cupcake[]>) => {
      setPost(response.data);
    });
  }, []);

  console.log("oie", post);
  // console.log("aqui", post.name);

  // if (post === ) {
  //   return null;
  // }

  const addPokemonToFavorite = (id: string) => {
    // setFavorites([...favorites, pokemon]);

    api
      .patch("/update/656210423ece23d086b58968", {
        isFavorite: false,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("meu erro: ", error);
      });

    // api
    //   .patch("/update/656210423ece23d086b58968", { isFavorite: true })
    //   .catch((error) => console.log(error));

    // api.get("/getAll").then((response: AxiosResponse<Cupcake[]>) => {
    //   setPost(response.data);
    // });

    // .then((response: AxiosResponse<Cupcake[]>) => {
    // setPost(response.data);
    // });

    // fetch("http://localhost:3000/api/update/656210423ece23d086b58968", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ isFavorite: true }),
    // });

    // fetch("http://localhost:3000/api/update/656210423ece23d086b58968", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ data: { isFavorite: true } }),
    // });
  };

  return (
    <CupcakeListContainer>
      {post.map((v) => (
        <CupcakeCardContainer>
          <CupcakeImg src={v.imgUrl} />
          <TopWrapper>
            <Name>{v.name}</Name>
            {v.isFavorite ? (
              <HeartIconFilled />
            ) : (
              <HeartIcon onClick={() => addPokemonToFavorite(v.id)} />
            )}
          </TopWrapper>
          <button onClick={() => addPokemonToFavorite(v.id)}>me clica</button>
          <Description>{v.description}</Description>
          <BottomWrapper>
            <span>R${v.price},00</span>
            <BuyButton>
              <span>comprar</span>
            </BuyButton>
          </BottomWrapper>
        </CupcakeCardContainer>
      ))}
      {/* <CupcakeCard />
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
      <CupcakeCard /> */}
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

const CupcakeCardContainer = styled.div`
  width: 451px;
  height: 615px;
  padding: 1rem;
  background: #ffffff;
  border-radius: 70px;
`;

const CupcakeImg = styled.img`
  width: 419px;
  height: 358px;
  left: 34px;
  top: 351px;

  background: url(image.png);
  border-radius: 52px;
`;

const Name = styled.h2`
  /* width: 254px; */
  height: 56px;
  margin: 0.5rem 0 0 1rem;
  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 43px;

  color: #000000;
`;

const HeartIcon = styled(HeartSymbolIcon)`
  margin-top: -595px;
  margin-left: -10px;
  scale: 0.08;
`;

const HeartIconFilled = styled(HeartFilledSymbolIcon)`
  margin-top: -595px;
  margin-left: -10px;
  scale: 0.08;
`;

const Description = styled.p`
  width: 409px;
  height: 100px;
  margin: 0.5rem 0 0 1rem;
  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
`;

const BottomWrapper = styled.div`
  margin: 0 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 24px;
    margin-right: 1.2rem;
  }
`;

const BuyButton = styled.button`
  width: 202px;
  height: 40px;
  background: #3d2923;
  border: 1px solid #3d2923;
  border-radius: 20px;
  font-size: 20px;
  margin-right: 2rem;

  > span {
    color: #ffffff;
    font-family: "Inter", sans-serif;inter;
  }
`;

const Stock = styled.span`
  width: 60px;
  height: 30px;

  font-family: "Inter", sans-serif;'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
`;

const TopWrapper = styled.div`
  display: grid;
  grid: 150px 150px;
  height: 60px;
`;
