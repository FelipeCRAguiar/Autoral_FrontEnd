import styled from "styled-components"
import BlueLock from "../Assets/BlueLock.jpg";


export default function Award(props) {
  

  return (
    <Container>
      <Img src={BlueLock}/>
      <Gradient></Gradient>
      <TitleBox>
        <AwardName>Blue Lock</AwardName>
        <AwardStatus>Votação</AwardStatus>
      </TitleBox>
    </Container>
  )
}

const Container = styled.div`
  width: 216px;
  height: 216px;
  position: relative;
  margin-bottom: 200px;
`

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #EDCB72 100%);
`

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const TitleBox = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  bottom: 0;
  margin-bottom: 10px;
  margin-left: 10px;
`

const AwardName = styled.p`
  font-family: 'Roboto';
  font-weight: 200;
  font-size: 24.1735px;
  color: #000000;
`

const AwardStatus = styled.p`
  font-family: 'Roboto';
  font-weight: 200;
  font-size: 16.4648px;
  color: #000000;
`