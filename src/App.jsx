import { useState } from "react";
import { Start } from "./components/start";
import { Game } from "./components/Game";
import { useLabyrinthStore } from "./stores/useLabyrinthStore";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInput, setUserInput] = useState("")
  const {gameState, getBackground} = useLabyrinthStore()

  const handleLogin = (userInput) => {
    setUserInput(userInput)
    setIsLoggedIn(true)
  }

  return (

    <div className="app">
      {isLoggedIn ? (<Game userInput={userInput} />) : (<Start handleSubmit={handleLogin} />) }

    </div>
    
  
  );
};
