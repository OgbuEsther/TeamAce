import React from 'react'
import styled from "styled-components"
import img from "./Assets/tick.svg"
import img2 from "./Assets/acc.png"
import img3 from "./Assets/grid.svg"

const Superhero = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Top><h1>Business Payments Made Simple.</h1></Top>
                  <Down>
                      <Hold>
                          <Img src={img} />
                          <Text><p>Korapay payment methods</p></Text>
                      </Hold>
                      <Hold>
                          <Img src={img} />
                          <Text><p>Set up in minutes</p></Text>
                      </Hold>
                      <Hold>
                          <Img src={img} />
                          <Text><p>No hidden fees</p></Text>
                      </Hold>
                      <Button>Start now</Button>
                  </Down>
              </Left>
              <Right>
                  <Img2 src={img2} />
              </Right>
          </Wrapper>
    </Container>
  )
}

export default Superhero
const Img2 = styled.img`
  height: 500px;
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`
const Button = styled.div`
    color: #232333;
    font-size: 18px;
    font-weight: 600;
    width: 135px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #3CD19C;
    margin-top: 17px;
`
const Right = styled.div`
    width: 48%;
    display: flex;
    /* justify-content: center; */
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    @media screen and (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
  @media screen and (max-width: 500px) {
    margin-top: 30px;
  }
`
const Text = styled.div`
    margin-left: 15px;
    p{
        color: #232333;
    /* font-size: 18px; */
    line-height: 1.5;
    font-weight: 600;
    margin: 0;
    }
`
const Img = styled.img`
    
`
const Hold = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`
const Down = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`
const Top = styled.div`
    h1{
        color: #232333;
    font-size: 68px;
    line-height: 1.1;
    font-weight: 600;
    margin: 0;
    @media screen and (max-width: 768px) {
        font-size: 55px;
    }
  @media screen and (max-width: 500px) {
   font-size: 40px;
  }
  @media screen and (max-width: 320px) {
   font-size: 33px;
  }
    }
`
const Left = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 92%;
    display: flex;
    padding-top: 80px;
    flex-wrap: wrap;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`