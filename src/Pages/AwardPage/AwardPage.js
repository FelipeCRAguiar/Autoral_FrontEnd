import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import styled from "styled-components";
import AwardsLogo from "../../Assets/AwardsLogo.png";
import Triangle from "../../Assets/Triangle.png";
import Award from "../../Components/Award";


export default function AwardPage() {
  const navigate = useNavigate();


  function handleClick(e) {
    navigate("/create")
  }

  return (
    <Container>
      <Header />
      <Logo src={AwardsLogo}/>
      <Button onClick={handleClick} style={{ cursor: "pointer" }}>Crie a sua</Button>
      <TriangleImg src={Triangle}/>
      <AwardContainer>
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
        <Award />
      </AwardContainer>
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

const TriangleImg = styled.img`
  width: 100%;
  margin-bottom: 130px;
`

const AwardContainer = styled.div`
  width: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`