import { useState, useEffect } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

import StartGame from './components/StartGame'
import Quiz from './components/Quiz'



function App() {
  let url = `https://opentdb.com/api.php?amount=5&type=multiple`

  let [triviaQuestions, setTriviaQuestions] = useState()
  let [gameStart, setGameStart] = useState(false)
  let [gameEnd, setGameEnd] = useState(false)
  let [correctQuestions, setCorrectQuestions] = useState(0)

   function startGame() {
    setGameStart(true)
   }

   function checkQuestions() {
    let total = 0
      triviaQuestions.forEach((question)=>{
        if (question.selected === question.correct_answer) {
          total += 1
        }
      })

      setCorrectQuestions(total)
      setGameEnd(true)
   }

   function selectAnswer(data, index, gameOver){
    console.log(gameOver)
    if (!gameOver) {
    setTriviaQuestions(
      (prev)=>{
        let newQuestions = prev.map((question, currIdx)=>{
          if (currIdx === index) {
            return question.selected === data? {...question, selected:''}:{...question, selected:data}
          } else {
            return question
          }
          
        })

        return newQuestions
      }
      
    )
    }
   }

   function restartGame() {
    setGameStart(false);
    setGameEnd(false)
   }

   function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index lower than i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at indices i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

  

  const fetchQuizData = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        if (response.ok){
          let output = data.results.map((question, index)=>{
            let obj = {...question, selected:'', key:uuidv4()}
            obj.answers = shuffleArray([question.correct_answer, ...question.incorrect_answers])
            obj.number = index
            return obj
          })
          setTriviaQuestions(output)
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
    
    , [gameStart])

  return (
    <>
      {gameStart?<Quiz 
        questions={triviaQuestions}
        clicked={selectAnswer}
        check={checkQuestions}
        gameOver={gameEnd}
        correctQuestions={correctQuestions}
        restart={restartGame}
        /> :
      <StartGame click = {startGame}/>}
    </>
  )
}

export default App
