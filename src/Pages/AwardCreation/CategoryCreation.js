import Header from "../../Components/Header";
import styled from "styled-components";
import CreateLogo from "../../Assets/CreateLogo.png";
import Rectangle from "../../Assets/Rectangle.png";
import ReverseTriangle from "../../Assets/ReverseTriangle.png"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Category from "../../Components/Category";
import { Button } from "@mui/material";


export default function CategoryCreation() {
  const { state } = useLocation()
  const [categoryList, setCategoryList] = useState([])
  const [optionsList, setOptionsList] = useState([])
  const [list, setList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const num = parseInt(state.categoryNumber)
    const arr = []
    for (let i = 0; i < num; i++) {
      arr.push(<Category setCategoryList={setCategoryList} categoryList={categoryList} optionsNumber={state.optionsNumber} optionsList={optionsList} setOptionsList={setOptionsList} key={i} />)
    }
    setList(arr)
  }, [])
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(categoryList)
    console.log(optionsList)
    navigate('/')
  }

  return (
    <Container>
      <Header />
      <Logo src={CreateLogo}/>
      <TriangleImg src={ReverseTriangle}/>
      <CreationContainer>
        <RectangleImg src={Rectangle} />
        <FormContainer>
          <Form>
            {list}
            <Button variant="contained" onClick={handleSubmit} sx={{marginBottom: '20px'}}>Criar premiação</Button>
          </Form>
        </FormContainer>
      </CreationContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin-top: 73.09px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  margin-top: 85px;
`

const TriangleImg = styled.img`
  width: 100%;
  margin-bottom: 130px;
`

const CreationContainer = styled.div`
  width: 900px;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const RectangleImg = styled.img`
  width: 100%;
  height: 100%;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 100px;
`

const FormContainer = styled.div`
  background-color: #FFFFFF;
  width: 700px;
  height: 1000px;
  position: absolute;
  overflow: scroll;
`