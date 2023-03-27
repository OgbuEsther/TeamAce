import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import styled from "styled-components";
import img from "../Assets/save.svg";
import { getAllClients } from "../api/staffEndpoints";
import { UseAppSelector } from "../Global/Store";
import {BsArrowRightShort} from "react-icons/bs"
import { FaGoogleWallet } from "react-icons/fa"
const Recent = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
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
                        <Button onClick={Toggle}>Start Plans</Button>
                  </P>
              </Right>
          </Cardhold>

          {show ? (
              <Plans>
                  <Holder>
                <Card4>
                  <Circle4>
                      <FaGoogleWallet />
                  </Circle4>
                  <Wallet>
                        <h3>Rents</h3>
                        <p>Wallet id</p>
                  </Wallet>
              </Card4>

                      <Card2>
                  <Circle2>
                      <FaGoogleWallet />
                  </Circle2>
                  <Wallet>
                        <h3>School fees</h3>
                        <p>Wallet id</p>
                  </Wallet>
              </Card2>

                      <Card3>
                  <Circle3>
                      <FaGoogleWallet />
                  </Circle3>
                  <Wallet>
                      <p>Wallet id</p>
                      <h3>1126490654</h3>
                  </Wallet>
              </Card3>
              </Holder>
          </Plans>
          ) : null}

    </Container>
  );
};

export default Recent;
const Circle3 = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #3184f7;
    color: #fff;
    font-size: 30px;
`
const Card3 = styled.div`
    width: 230px;
    height: 150px;
    background-color: #0D71FA;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
`
const Circle4 = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #82d1b9;
    color: #fff;
    font-size: 30px;
`
const Card4 = styled.div`
    width: 230px;
    height: 150px;
    background-color: #39A081;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
`
const Wallet = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    margin-top: 15px;
    p{
        color: #fff;
        margin: 0;
    }
    h3{
        color: #fff;
        font-size: 23px;
        margin: 0;
    }
`
const Circle2 = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #f7a156;
    color: #fff;
    font-size: 30px;
`
const Card2 = styled.div`
    width: 230px;
    height: 150px;
    background-color: #EF7914;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius:10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 15px;
`
const Holder = styled.div`
    width: 830px;
    height: 400px;
    display: flex;
    background-color: #fff;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
`
const Plans = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 5;
`
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
