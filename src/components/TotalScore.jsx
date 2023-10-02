import styled from "styled-components"
const TotalScore = ({score}) => {
  return (
    <ScoredContainer>
      <h1>{score}</h1>
      <p>Total score</p>
    </ScoredContainer>
  )
}

export default TotalScore
const ScoredContainer=styled.div`
max-width:200px;
text-align:center;

h1{
    font-size: 100px;
    line-height:20px
}
p{
   font-size:25px;
   font-weight:500px; 
  

}`