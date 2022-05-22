import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderLogo from "../Assets/HeaderLogo.png";
import FadeMenu from "./Menu";

export default function Header(props) {
  

  return (
    <Container>
      <Img src={HeaderLogo} />
      <LinkContainer>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/'>Premiações</StyledLink>
        <StyledLink to='/'>Crie a sua</StyledLink>
        <FadeMenu />
      </LinkContainer>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  height: 73.09px;
  background-color: #000000;
`

const Img = styled.img`
  margin-left: 100px;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  margin-right: 100px;
`

const StyledLink = styled(Link)`
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 22px;
  color: #FFFFFF;
`