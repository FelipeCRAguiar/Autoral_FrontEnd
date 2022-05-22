import Header from "../../Components/Header";
import styled from "styled-components";
import PageLogo from "../../Assets/PageLogo.png";
import Triangle from "../../Assets/Triangle.png";


export default function Home() {
  

  return (
    <Container>
      <Header />
      <Logo src={PageLogo}/>
      <Button>Crie a sua</Button>
      <Img src={Triangle}/>
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

const Button = styled.button`
  width: 204px;
  height: 43.14px;
  background-color: #EDCB72;
  border-radius: 42.2379px;
  border: none;
  margin-top: 50px;

  font-family: 'Roboto';
  font-weight: 300;
  font-size: 21.5683px;
  text-align: center;
  color: #000000;
`

const Img = styled.img`
  width: 100%
`