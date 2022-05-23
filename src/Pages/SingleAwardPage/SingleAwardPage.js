import Header from "../../Components/Header";
import styled from "styled-components";
import Rectangle from "../../Assets/Rectangle.png";
import ReverseTriangle from "../../Assets/ReverseTriangle.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Option from "../../Components/Option";


export default function SingleAwardPage() {
  const [categoryList, setCategoryList] = useState(['a','b','c'])
  const [optionsList, setOptionsList] = useState([])
  const [list, setList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const arr = []
    for (let i = 0; i < categoryList.length; i++) {
      arr.push(
      <>
        <CategoryName>{categoryList[i]}</CategoryName>
        <Option optionsList={optionsList} setOptionsList={setOptionsList} key={i} />
      </>)
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
      <Name>Nome</Name>
      <TriangleImg src={ReverseTriangle}/>
      <CreationContainer>
        <RectangleImg src={Rectangle} />
        <FormContainer>
          <Form>
            {list}
            <Button variant="contained" onClick={handleSubmit} sx={{marginBottom: '20px'}}>Nomear</Button>
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

const Name = styled.p`
  margin-top: 85px;
  font-family: 'Roboto';
  font-size: 56.064px;
  color: #EDCB72;
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

const CategoryName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
`