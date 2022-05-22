import { Box, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import cadastro from "../../Assets/cadastro.png"


export default function SignUp() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "", username: ""});
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    navigate("/login")
  }
  

  return (
    <Container sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Container sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 2,
        marginTop: '320px'
      }}>
        <Box sx={{
          width: "700px",
          height: "500px",
          backgroundColor: 'white'
        }}>
          <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: "center",
            marginTop: '30px',
            marginBottom: '40px'
          }}>
            <Title>Cadastro</Title>
          </Box>
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Form onSubmit={handleSubmit}>
              <Input placeholder="Username" name="username" value={formData.username} onChange={handleChange} disabled={isDisabled} />
              <Input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} disabled={isDisabled} />
              <Input type="password" placeholder="Senha" name="password" value={formData.password} onChange={handleChange} disabled={isDisabled} />
              <Input type="password" placeholder="Confirme sua senha" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} disabled={isDisabled} />
              <BottomContainer>
                <StyledLink to="/login">Login</StyledLink>
                <Button type="submit" style={{ cursor: "pointer" }} disabled={isDisabled}>CADASTRAR</Button>
              </BottomContainer>
            </Form>
          </Box>
        </Box>
      </Container>
      <Img src={cadastro}/>
    </Container>
  )
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute
`

const Title = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 45px;
  color: #540000;
`

const Input = styled.input`
  width: 500px;
  height: 60px;
  border-bottom: 2px solid #F0D691;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  color: #EDCB72;
  border-top: none;
  border-left: none;
  border-right: none;
  margin-bottom: 5px;
`

const BottomContainer = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const SelectionContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: #EDCB72;
  text-decoration-line: underline;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #540000;
  border-radius: 8px;
  border: none;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  color: #EDCB72;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`