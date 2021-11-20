import React from 'react'
import styled from 'styled-components'
import { CaretLeftFilled } from '@ant-design/icons'
//////////////////////////////////////////////////

const Error = styled.div`
    width: 300px;
    height: 300px;
    color: #e32636;
    margin: 0 auto;
    font-size: 32px;
    text-align: center;
    padding-top: 100px;
    border: 2px solid #c21500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`

const Container = styled.div`
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    align-items: center;
    flex-direction: column;
    background-color: #2B1100;
    justify-content: space-around;
`

const Button = styled.button`
    padding: 5px 0;
    width: 130px;
    height: 30px;
    display: flex;
    outline: none;
    margin-left: auto;
    color: whitesmoke;
    margin-right: auto;
    align-self: center;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    background-color: #FF0000;
    justify-content: space-around;
`

function ErrorMessages ({ globalError }) {
  function handleClick () {
    window.location.reload()
  }

  setTimeout(() => window.location.reload(), 10000)

  return (
    <Container>
      <Error>Щось пішло не так! {globalError}</Error>
      <Button type='button' onClick={handleClick}>
        <CaretLeftFilled/> Повернутись на головну
      </Button>
    </Container>

  )
}

export default ErrorMessages
