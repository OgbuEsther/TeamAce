import React from 'react'
import styled from 'styled-components'
import img from "./Assets/tired.png"
import img2 from "./Assets/logos2.png"
import img3 from "./Assets/pays.png"

const Accept = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h2>The new way to accept payments</h2></Top>
              <Down>
                  <Left>
                      <Img src={img} />
                  </Left>
                  <Right>
                      <Img2 src={img2} />
                      <Img3 src={img3} />
                  </Right>
              </Down>
          </Wrapper>
    </Container>
  )
}

export default Accept
const Img3 = styled.img`
    height: 520px;
`
const Img2 = styled.img`
    height: 40px;
    margin-top: 90px;
`
const Right = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    
`
const Left = styled.div`
    width: 48%;
    display: flex;
    border-right: 2px solid #D3D3D3;
`
const Down = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;
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