import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import img from "../Assets/save.svg";
import { getAllClients } from "../api/staffEndpoints";
import { UseAppSelector } from "../Global/Store";
import {BsArrowRightShort} from "react-icons/bs"
const Recent = () => {
  const allClients = useQuery({
    queryKey: ["viewClients"],
    queryFn: getAllClients,
  });
  console.log("this is all staffs", allClients.data);
  const user = UseAppSelector((state) => state.Client);

  console.log(user);
  return (
    <Container>
          <Cardhold>
              <Left>
                  <Img src={img} />
              </Left>
              <Right>
                  <Top>Savings Plan</Top>
                  <P>
                      <p>Discover effective strategies for compounding money over time</p>
                      <Down><p>This savings plan can be your financial nest towards achieving any capital project such as building a house or against unforeseen circumstances such as disability.</p></Down>
                        <Button>Start Plans</Button>
                  </P>
              </Right>
          </Cardhold>

    </Container>
  );
};

export default Recent;
const Button = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: #0D71FA;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    transition: all 350ms ease-in-out;
    :hover{
        background-color: #fff;
        color: #0D71FA;
        border: 1px solid #0D71FA;
    }
`
const Down = styled.div`
    
`
const P = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    p{

    }
`
const Right = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 40px;
`
const Left = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
`
const Icon = styled.div`
    margin-left: 40px;
    margin-top: 5px;
`
const Start = styled.div`
    cursor: pointer;
    margin-top: 40px;
    display: flex;
    align-items: center;
    transition: all 350ms ease-in-out;
    :hover{
        color: #EF7914;
    }
`
const Texthold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    h3{
        color: #EF7914;
    }
    p{
        width: 260px;
        margin: 0;
    }
`
const Img = styled.img`
    height: 200px;
`
const Card = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Cardhold = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: -30px;
    margin-top: 40px;
`
const Top = styled.div`
    display: flex;
    font-size: 23px;
    font-weight: 500;
    margin-left: -30px;
`

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  margin-top: 50px;
  flex-direction: column;
  /* background-color: black; */
  /* margin-left: 260px; */
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;
