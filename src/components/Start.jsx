import { useState } from "react"
import "./Start.css"
import mazeBackground from '/assets/mazeBackground.jpg'

export const Start = ({handleSubmit}) => {
  const [userInput, setUserInput] = useState("");
  //const { isPlaying, toggleAudio } = useAudio ();

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(userInput)
  }

  return (
    <div className="wrapper">
      <div className="img-wrapper">
        <img src={mazeBackground} alt="maze-background" className="maze-background" />
      </div>
      <div className="start-wrapper">
        <div className="start-info">
            <h1>THE MAZE</h1>
            <p>Enter the labyrinth on your own risk.</p>
            <p>Can you find a way out of the maze?</p>
            <form className="form" onSubmit={onSubmit}>  
              <label htmlFor="enterUsername" className="enter">Enter your username:</label>
              <div>
                <input type="text" id="usernameInput" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                <button className="submit-btn" type="submit">Submit</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}