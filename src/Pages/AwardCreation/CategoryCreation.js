import Header from "../../Components/Header";
import styled from "styled-components";
import CreateLogo from "../../Assets/CreateLogo.png";
import Rectangle from "../../Assets/Rectangle.png";
import ReverseTriangle from "../../Assets/ReverseTriangle.png"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Category from "../../Components/Category";
import { Button, TextField } from "@mui/material";


export default function CategoryCreation() {
  const { state } = useLocation()
  const [categoryList, setCategoryList] = useState([])
  const [optionsList, setOptionsList] = useState([])
  const [list, setList] = useState([])
  const navigate = useNavigate();
  const [categoria1, setCategoria1] = useState({
    name: '',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option5:''
  })
  const [categoria2, setCategoria2] = useState({
    name: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: ''
  })
  const [categoria3, setCategoria3] = useState({
    name: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: ''
  })
  const [categoria4, setCategoria4] = useState({
    name: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: ''
  })
  const [categoria5, setCategoria5] = useState({
    name: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: ''
  })

  function handleCategory1Input(e) {
    e.preventDefault();
    setCategoria1({ ...categoria1, [e.target.name]: e.target.value })
    console.log(categoria1)
  }

  function handleCategory2Input(e) {
    e.preventDefault();
    setCategoria2({ ...categoria2, [e.target.name]: e.target.value })
    console.log(categoria2)
  }

  function handleCategory3Input(e) {
    e.preventDefault();
    setCategoria3({ ...categoria3, [e.target.name]: e.target.value })
    console.log(categoria3)
  }

  function handleCategory4Input(e) {
    e.preventDefault();
    setCategoria4({ ...categoria4, [e.target.name]: e.target.value })
    console.log(categoria4)
  }

  function handleCategory5Input(e) {
    e.preventDefault();
    setCategoria5({ ...categoria5, [e.target.name]: e.target.value })
    console.log(categoria5)
  }

  /*useEffect(() => {
    const num = parseInt(state.categoryNumber)
    const arr = []
    for (let i = 0; i < num; i++) {
      arr.push(<Category setCategoryList={setCategoryList} categoryList={categoryList} optionsNumber={state.optionsNumber} optionsList={optionsList} setOptionsList={setOptionsList} key={i} />)
    }
    setList(arr)
  }, [])*/
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(categoria1)
    console.log(categoria2)
    console.log(categoria3)
    console.log(categoria4)
    console.log(categoria5)
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
            <TextField required label="Nome da categoria" placeholder='Nome da categoria' sx={{width: '500px'}} value={categoria1.name} onChange={handleCategory1Input} name='name' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria1.option1} onChange={handleCategory1Input} name='option1' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria1.option2} onChange={handleCategory1Input} name='option2' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria1.option3} onChange={handleCategory1Input} name='option3' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria1.option4} onChange={handleCategory1Input} name='option4' />         
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria1.option5} onChange={handleCategory1Input} name='option5' />
            
            <TextField required label="Nome da categoria" placeholder='Nome da categoria' sx={{width: '500px'}} value={categoria2.name} onChange={handleCategory2Input} name='name' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria2.option1} onChange={handleCategory2Input} name='option1' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria2.option2} onChange={handleCategory2Input} name='option2' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria2.option3} onChange={handleCategory2Input} name='option3' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria2.option4} onChange={handleCategory2Input} name='option4' />         
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria2.option5} onChange={handleCategory2Input} name='option5' />

            <TextField required label="Nome da categoria" placeholder='Nome da categoria' sx={{width: '500px'}} value={categoria3.name} onChange={handleCategory3Input} name='name' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria3.option1} onChange={handleCategory3Input} name='option1' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria3.option2} onChange={handleCategory3Input} name='option2' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria3.option3} onChange={handleCategory3Input} name='option3' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria3.option4} onChange={handleCategory3Input} name='option4' />         
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria3.option5} onChange={handleCategory3Input} name='option5' />

            <TextField required label="Nome da categoria" placeholder='Nome da categoria' sx={{width: '500px'}} value={categoria4.name} onChange={handleCategory4Input} name='name' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria4.option1} onChange={handleCategory4Input} name='option1' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria4.option2} onChange={handleCategory4Input} name='option2' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria4.option3} onChange={handleCategory4Input} name='option3' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria4.option4} onChange={handleCategory4Input} name='option4' />         
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria4.option5} onChange={handleCategory4Input} name='option5' />

            <TextField required label="Nome da categoria" placeholder='Nome da categoria' sx={{width: '500px'}} value={categoria5.name} onChange={handleCategory5Input} name='name' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria5.option1} onChange={handleCategory5Input} name='option1' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria5.option2} onChange={handleCategory5Input} name='option2' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria5.option3} onChange={handleCategory5Input} name='option3' />
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria5.option4} onChange={handleCategory5Input} name='option4' />         
            <TextField required label="Nome da opção" placeholder='Nome da opção' sx={{width: '500px', marginLeft: '50px'}} value={categoria5.option5} onChange={handleCategory5Input} name='option5' />
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