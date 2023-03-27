import React from 'react'
import styled from 'styled-components'
import img from "./Assets/old.png"
import img2 from "./Assets/happy.png"
import img3 from "./Assets/jump.png"

const Methods = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h1>Add payment methods in a click.</h1></Top>
              <Boxhold>
                  <Card>
                      <Img src={img} />
                      <Down>
                          <h3>Enjoy Easypay payment method</h3>
                          <Started>Get started</Started>
                      </Down>
                  </Card>

                  <Card>
                      <Img src={img2} />
                      <Down>
                          <h3>You decide exactly how to get paid</h3>
                          <Started>Get started</Started>
                      </Down>
                  </Card>

                  <Card>
                      <Img src={img3} />
                      <Down>
                          <h3>Overcome payment declines</h3>
                          <Started>Get started</Started>
                      </Down>
                  </Card>
              </Boxhold>
          </Wrapper>
    </Container>
  )
}

export default Methods
const Started = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-top: 50px;
`
const Down = styled.div`
    width: 100%;
    padding: 20px;
    flex-direction: column;
    h3{
        font-size: 20px;
        line-height: 1.4;
        width: 220px;
    }
`
const Img = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

const Card = styled.div`
    width: 370px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow: hidden;
    border-radius: 10px;
    margin-top: 20px;
    @media screen and (max-width: 768px){
        width: 340px;
    }
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 500px){
        justify-content: center;
        display: flex;
    }
`
const Top = styled.div`
    h1{
        color: #00214F;
        /* text-align: center; */
        @media screen and (max-width: 425px) {
            font-size: 26px;
        }
         @media screen and (max-width: 375px) {
            font-size: 22px;
        }
    }
`
const Wrapper = styled.div`
  display: flex;
  width: 92%;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`