import React from "react";
import styled from "styled-components";
import img from "../Assets/person.png";
import Cards from "./Cards";
import Latesttransact from "./Latesttransact";
import Recent from "./Recent";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <Top>
          <Left>
            <Bold>Dashboard</Bold>
          </Left>
        </Top>
        <Cards />
        <Recent />
        <Latesttransact />
      </Wrapper>
    </Container>
  );
};

export default Home;
const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 260px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
  /* background-color: red; */
`;