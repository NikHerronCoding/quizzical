import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StartGame from './components/StartGame'
import Quiz from './components/Quiz'



function App() {
  let url = `https://opentdb.com/api.php?amount=5&type=multiple`

  let [triviaQuestions, setTriviaQuestions] = useState()
  let [gameStart, setGameStart] = useState(false);

   function startGame() {
    setGameStart(true)
   }
  

  const fetchQuizData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok){
          console.log(response)
          setTriviaQuestions(data.results)  // Update the state with the quiz data
        } else {
          throw new Error('Bad Response')
        }
    } catch (error) {
        console.error("Error fetching quiz data:", error);
    }
  };


  useEffect(
    ()=>{
        fetchQuizData()
      }
    
    , [])

    


  return (
    <>
      {gameStart?<Quiz questions={triviaQuestions}/> : <StartGame click = {startGame}/>}
    </>
  )
}

export default App
