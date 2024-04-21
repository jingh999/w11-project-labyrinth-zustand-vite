import { useCallback, useEffect, useState } from 'react'

export const Game = ({userInput}) => {
  const [isLoading, setIsLoading] = useState(true)

  const startGame = useCallback (() => {
    fetch('https://labyrinth.technigo.io/start', 
    {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: userInput,
    })
  })
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      
    })
    .catch(error=>{
      console.error('Error:', error)
    })
    .finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
  }, [userInput])

  useEffect(() => {
    startGame()
  }, [startGame])

  return (
    <div>
      {isLoading ? (
        <div> Is Loading</div>
      ) : (
        <div>Game on</div>
      )
      }
      
    </div>
  )
}
