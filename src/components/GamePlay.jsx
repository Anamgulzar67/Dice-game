import React from "react";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button } from "../styled/Button";
import { OutlineButton } from "../styled/Button";
import Rulles from "./Rulles";



const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectednumber, setSelectednumber] = useState();
  const [currentdice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
const [visibleRules, setVisibleRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectednumber) {
      setError("Press any number to play");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectednumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectednumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectednumber={selectednumber}
          setSelectednumber={setSelectednumber}
        />
      </div>
      <RoleDice currentdice={currentdice} roleDice={roleDice} />
      <div className="btns">
        <Button onClick={()=>setVisibleRules((prev)=>!prev)} >
        {visibleRules?"hide":"show"}Rules</Button>
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
      </div>
      {visibleRules &&    <Rulles/>} 
   </MainContainer>
  );
};

export default GamePlay;
const MainContainer = styled.main`
  padding-top: 0px;
  margin: 2px 200px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: center;
  }
`;
