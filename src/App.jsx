import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay";
function App() {
  const [IsGameStart, setIsGameStarted] =useState(false)
 const toggleGamePlay=()=>{
  setIsGameStarted((prev)=>!prev);
 };
  return (
    <>
    {
      IsGameStart?<GamePlay/>:<StartGame
      toggle={toggleGamePlay}/>
    }
  
    </>
  )
}

export default App
