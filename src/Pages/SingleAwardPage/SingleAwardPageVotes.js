import Header from "../../Components/Header";
import styled from "styled-components";
import Rectangle from "../../Assets/Rectangle.png";
import ReverseTriangle from "../../Assets/ReverseTriangle.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";


export default function SingleAwardPageVotes() {
  const navigate = useNavigate()
  const [categoryList, setCategoryList] = useState([{name: 'a', options: [{name: 'a', id: 1}, {name: 'b', id: 2}, {name: 'c', id: 3}]}, {name: 'b', options: [{name: 'a', id: 4},{name: 'b', id: 5},{name: 'c', id: 6}]}, {name: 'c', options: [{name: 'a', id: 7},{name: 'b', id: 8},{name: 'c', id: 9}]}, {name: 'd', options: [{name: 'a', id: 10},{name: 'b', id: 11},{name: 'c', id: 12}]}, {name: 'e', options: [{name: 'a', id: 13},{name: 'b', id: 14},{name: 'c', id: 15}]}])
  const [voto1, setVoto1] = useState(0)
  const [voto2, setVoto2] = useState(0)
  const [voto3, setVoto3] = useState(0)
  const [voto4, setVoto4] = useState(0)
  const [voto5, setVoto5] = useState(0)

  function handleVote1(value) {
    const vote = categoryList[0].options.find((option) => option.name === value).id
    setVoto1(vote)
    console.log(voto1)
  }

  function handleVote2(value) {
    const vote = categoryList[1].options.find((option) => option.name === value).id
    setVoto2(vote)
    console.log(voto2)
  }

  function handleVote3(value) {
    const vote = categoryList[2].options.find((option) => option.name === value).id
    setVoto3(vote)
    console.log(voto3)
  }

  function handleVote4(value) {
    const vote = categoryList[3].options.find((option) => option.name === value).id
    setVoto4(vote)
    console.log(voto4)
  }

  function handleVote5(value) {
    const vote = categoryList[4].options.find((option) => option.name === value).id
    setVoto5(vote)
    console.log(voto5)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(voto1)
    console.log(voto2)
    console.log(voto3)
    console.log(voto4)
    console.log(voto5)
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
            <CategoryName>{categoryList[0].name}</CategoryName>
            <Autocomplete 
              options={categoryList[0].options.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} 
              label="Voto" />} 
              sx={{width: '500px'}} 
              onInputChange={(e, value) => handleVote1(value)}/>

            <CategoryName>{categoryList[1].name}</CategoryName>
            <Autocomplete 
              options={categoryList[1].options.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} 
              label="Voto" />} 
              sx={{width: '500px'}} 
              onInputChange={(e, value) => handleVote2(value)}/>

            <CategoryName>{categoryList[2].name}</CategoryName>
            <Autocomplete 
              options={categoryList[2].options.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} 
              label="Voto" />} 
              sx={{width: '500px'}} 
              onInputChange={(e, value) => handleVote3(value)}/>

            <CategoryName>{categoryList[3].name}</CategoryName>
            <Autocomplete 
              options={categoryList[3].options.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} 
              label="Voto" />} 
              sx={{width: '500px'}} 
              onInputChange={(e, value) => handleVote4(value)}/>

            <CategoryName>{categoryList[4].name}</CategoryName>
            <Autocomplete 
              options={categoryList[4].options.map((option) => option.name)}
              renderInput={(params) => <TextField {...params} 
              label="Voto" />} 
              sx={{width: '500px'}} 
              onInputChange={(e, value) => handleVote5(value)}/>
            <Button variant="contained" onClick={handleSubmit} sx={{marginBottom: '20px'}}>Votar</Button>
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