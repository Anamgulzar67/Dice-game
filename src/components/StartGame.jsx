import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
     <div> <img src="images.jpeg" alt="" height="400px"/></div>
      <div className="content">
        <h1>DiceGame</h1>
        <Button onClick={toggle}>Play now</Button>
      
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  max-width:780px;
  display: flex;
  height: 100vh;
  margin:200px auto;
  .content h1{
    font-size:90px
  }
`;
