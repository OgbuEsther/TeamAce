import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from "../Assets/21.jpeg"

const Latesttransact = () => {
  return (
      <Container>
          <Top><h2>Latest Transactions</h2></Top>
          <Boxhold>
              
              
          </Boxhold>
          <Head>
                  <Navs>Recepient</Navs>
                  <Navs>Date</Navs>
                  <Navs>Amount</Navs>
            </Head>
              <Head2>
              <Profilehold>
                  <Circle><Img src={ img} /></Circle>
                  <Name>Ogbu Esther</Name>
              </Profilehold>

              <Role>
                  12/09/23
              </Role>

              <Joined>$400</Joined>
          </Head2>

          <Head2>
              <Profilehold>
                  <Circle><Img src={ img} /></Circle>
                  <Name>Ogbu Esther</Name>
              </Profilehold>

              <Role>
                  12/09/23
              </Role>

              <Joined>$400</Joined>
          </Head2>

          <Head2>
              <Profilehold>
                  <Circle><Img src={ img} /></Circle>
                  <Name>Ogbu Esther</Name>
              </Profilehold>

              <Role>
                  12/09/23
              </Role>

              <Joined>$400</Joined>
          </Head2>
          <View>
              <NavLink to="/transaction" style={{textDecoration: "none"}}>
                   <Button>
                  View More
              </Button>
                  </NavLink>
          </View>
    </Container>
  )
}

export default Latesttransact
const Button = styled.div`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #0D71FA;
    border-radius: 50px;
    cursor: pointer;
`
const View = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`
const Joined = styled.div`
    
`
const Role = styled.div`
    width: 200px;
    /* background-color: green; */
    margin-right: 90px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 500px) {
        background-color: red;
        margin-right: 18px;
        /* margin-left: 30px; */
        width: 0px;
    }
`
const Img = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
`
const Name = styled.div`
    display: flex;
    margin-left: 10px;
    @media screen and (max-width: 500px){
        width: 50px;
        /* background-color: red; */
    }
    
`
const Circle = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid #fff;
    /* background-color: red; */
    display: flex;
    /* justify-content */
    align-items: center;
    border-radius: 50px;
    overflow: hidden;
`
const Profilehold = styled.div`
    display: flex;
    align-items: center;
`
const Hold = styled.div`
    height: 40px;
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    background-color: blue;
    align-items: center;
`
const Navs2 = styled.div`
    color: #5a5a5a;
    font-size: 18px;
`
const Navs = styled.div`
    color: #fff;
    font-size: 18px;
    cursor: pointer;
`
const Head2 = styled.div`
    background-color: #F6F7F9;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    display: flex;
    /* height: 100%; */
    /* height: 60px; */
    padding-left: 10px;
    padding-right: 10px;
`
const Head = styled.div`
    margin-top: 15px;
    justify-content: space-between;
    background-color: #0D71FA;
    align-items: center;
    display: flex;
    height: 70px;
    padding-left: 10px;
    padding-right: 10px;
    position: sticky;
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    /* background-color: red; */
`
const Top = styled.div`
    h2{
        margin: 0;
        font-size: 20px;
    }
`

const Container = styled.div`
    width: 93%;
    display: flex;
    height: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 30px;
    margin-top: 30px;
    flex-direction: column;
    margin-bottom: 30px;
    background-color: #fff;
`