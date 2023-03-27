import React from 'react'
import styled from 'styled-components'

const Methods = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h2>Add payment methods in a click.</h2></Top>
              <Boxhold>
                  <Card>
                      
                  </Card>
              </Boxhold>
          </Wrapper>
    </Container>
  )
}

export default Methods

const Card = styled.div`
    width: 300px;
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