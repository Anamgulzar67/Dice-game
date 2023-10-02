import styled from "styled-components";

const RoleDice = ({roleDice,currentdice}) => {

  return (
    <DiceContainer>
    <div className="dice" 
    onClick={()=>roleDice(1,7)}
    >
      <img src={`${currentdice}.png`} alt="" height="200px" />
    </div>
    <p>Click on dice to play</p>
    </DiceContainer>
  )
}

export default RoleDice
const DiceContainer=styled.div`
margin-top:40px;
display: flex;
flex-direction: column;
align-items: center;
.dice{
    cursor:pointer;
}
p{
    font-size:25px;
}
`;
