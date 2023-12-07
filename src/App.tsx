import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import { BASE_URL_IMG } from "./constants";
import { Menu } from "./types";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  & h1 {
    font-size: 24px;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    padding-inline: 10px;
  }
`;

const Content = styled.div`
  padding-top: 50px;
  display: flex;
  background-color: #f3f3f3;
  height: 100%;
  flex-wrap: wrap;
  padding-inline: 100px;
  justify-content: center;
  gap: 50px;
  @media screen and (max-width: 768px) {
    padding-inline: 10px;
    gap: 10px;
  }
`;

const Product = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: white;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  & img {
    width: 250px;
    object-fit: fill;
    height: 150px;
  }

  & .product-info {
    max-width: 100%;
    max-width: 500px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    padding-inline: 20px;
    align-items: start;
    height: 100%;
    text-align: start;
    & .product-name {
      font-size: 20px;
      margin: 0;
      text-align: start;
    }
    & .product-details {
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 4;
    }
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  grid-gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template: auto / 1fr;
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-top: auto;
`;
function App() {
  const [menu, setMenu] = useState<Menu>([]);
  const options = {
    method: "GET",
    url: "/data.json",
  };
  useEffect(() => {
    axios.request(options).then((response) => {
      setMenu(response.data.data.menu);
    });
  }, []);

  return (
    <Container>
      <NavBar>
        <h1>Cardápio Digital</h1>
      </NavBar>
      <Content>
        {menu.map((item) => (
          <Category key={item.code}>
            <h2>{item.name}</h2>
            <ProductContainer>
              {item.itens?.map((item) => (
                <Product key={item.code}>
                  <img src={BASE_URL_IMG + item.logoUrl} />
                  <div className="product-info">
                    <h2 className="product-name">{item.description}</h2>
                    <p className="product-details">{item?.details}</p>
                    <Price>R$ {item?.unitPrice}</Price>
                  </div>
                </Product>
              ))}
            </ProductContainer>
          </Category>
        ))}
      </Content>
    </Container>
  );
}

export default App;
