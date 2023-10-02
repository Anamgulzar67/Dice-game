
import styled from 'styled-components'

const Rulles = () => {
  return (
    <div>
      <RulesContainer>
        <h2>How to play game</h2>
        <div className='text'>
            <p>1-Select any number</p>
            <p>2-Click on Dice image</p>
            <p>3-After click on dice if selected number is equal to dice number you will get same points as dice</p>
            <p>4-If you get wrong guess then 2 points will be dedected</p>
        </div>
      </RulesContainer>
    </div>
  )
}

export default Rulles
const RulesContainer=styled.div`
max-width:700px;
margin:0 auto;
align-items: center;
justify-content: center;
background-color: cyan;
padding-top:20px;
padding-left:20px;
h2{
    font-size:20px;
    .text{
        margin-top:20px
    }
}
`;