import React from 'react'
import styled from 'styled-components'
import img from "./Assets/old.png"

const Methods = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h2>Add payment methods in a click.</h2></Top>
              <Boxhold>
                  <Card>
                      <Img src={img} />
                      <Down>
                          <h3>Enjoy Easypay payment method</h3>
                          <Started>Get started</Started>
                      </Down>
                  </Card>

                  <Card>
                      <Img src={img} />
                      <Down>
                          <h3>Enjoy Easypay payment method</h3>
                          <Started>Get started</Started>
                      </Down>
                  </Card>

                  <Card>
                      <Img src={img} />
                      <Down>
                          <h3>Enjoy Easypay payment method</h3>
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
        width: 190px;
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
`
const Boxhold = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
`
const Top = styled.div`
    h2{
        color: #000;
        font-weight: 600;
        font-size: 32px;
    }
`
const Wrapper = styled.div`
  display: flex;
  width: 92%;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`