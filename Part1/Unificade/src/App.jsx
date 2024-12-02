import { useState } from 'react'

const Tittle = ({text}) =>{
  return(
      <h1>{text}</h1>
  )
}

const Button = ({text, handleClick}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const ShowTextCount = ({text, number})=>{
  return(
    <p>{text}: {number}</p>
  )
}

const ShowCalculeFields = ({good, neutral, bad})=>{
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = (good / all) * 100
  return(
    <>
      <p>all: {all} </p>
      <p>average: {average}</p>
      <p>postives: {positive}%</p>
    </>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerCountGoodReviews = ()=>{
    setGood(good + 1)
  }

  const handlerCountNeutralReviews = ()=>{
    setNeutral(neutral + 1)
  }

  const handlerCountBadReviews = ()=>{
    setBad(bad + 1)
  }

  return (
    <div>
      <Tittle text='give feedback'/>
      <Button text='good' handleClick = {handlerCountGoodReviews}/>
      <Button text='neutral' handleClick ={handlerCountNeutralReviews}/>
      <Button text='bad' handleClick={handlerCountBadReviews}/>
      <Tittle text='stadistics'/>
      <ShowTextCount text='good' number={good}/>
      <ShowTextCount text='neutral' number={neutral}/>
      <ShowTextCount text='bad' number={bad}/>
      <ShowCalculeFields good={good} neutral={neutral} bad={bad}/>
    </div>

  )
}

export default App
