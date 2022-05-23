import Header from "../../Components/Header";
import styled from "styled-components";
import CreateLogo from "../../Assets/CreateLogo.png";
import Rectangle from "../../Assets/Rectangle.png";
import ReverseTriangle from "../../Assets/ReverseTriangle.png"
import { Autocomplete, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function AwardCreation() {
  const arr = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']
  const [isDisabled, setIsDisabled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    isPrivate: '',
    stage: 'votação',
    voteEndDate: ''
  })

  function handleFormInput(name, value) {
    setFormData({ ...formData, [name]: value })
    console.log(formData)

  }

  function handleFreeFormInput(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault();
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
            <TextField required label="Nome" placeholder='Nome da premiação' sx={{width: '500px'}} value={formData.name} onChange={handleFreeFormInput} name='name' />
            <TextField required label='Imagem' placeholder='Link para a imagem da premiação' sx={{width: '500px'}} type='url' value={formData.image} onChange={handleFreeFormInput} name='image'/>
            <InputContainer>
              <Autocomplete options={['true', 'false']} renderInput={(params) => <TextField {...params} label="É privado?" />} sx={{width: '150px'}} onInputChange={(e, value) => handleFormInput("isPrivate", value)}/>
              {/*<Autocomplete options={['votação', 'indicação']} renderInput={(params) => <TextField {...params} label="Estágio inicial" />} sx={{width: '200px'}} onInputChange={(e, value) => handleFormInput("stage", value)}/>*/}
            </InputContainer>
            {/*<InputContainer>
              <Autocomplete options={arr} renderInput={(params) => <TextField {...params} label="Quantas categorias?" />} sx={{width: '200px'}} onInputChange={(e, value) => handleFormInput("categoryNumber", value)}/>
              {formData.stage === 'votação'? <Autocomplete options={arr} renderInput={(params) => <TextField {...params} label="Quantas opções por categoria?" />} sx={{width: '250px'}} onInputChange={(e, value) => handleFormInput("optionsNumber", value)}/> : null}
            </InputContainer>*/}
            <InputContainer>
              <TextField required label="Fim da votação" sx={{width: '200px'}} value={formData.voteEndDate} onChange={handleFreeFormInput} name='voteEndDate' type='date'/>
              {formData.stage === 'indicação' ? <TextField required label="Fim das indicações" sx={{width: '200px'}} value={formData.nominateEndDate} onChange={handleFreeFormInput} name='nominateEndDate' type='date'/> : null}
            </InputContainer>
            <Button variant="contained" onClick={handleSubmit}>
              <StyledLink to='/create-category' state={formData}>Proxima etapa</StyledLink>
            </Button>
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
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

const StyledLink = styled(Link)`
  color: #FFFFFF
`