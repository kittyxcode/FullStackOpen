import { useState } from 'react'

const Tittle = ({text}) =>{
  return(
      <h1>{text}</h1>
  )
}

const Button = ({text}) => {
  return(
    <button>{text}</button>
  )
}

const ShowTextCount = ({text, number})=>{
  return(
    <p>{text} {number}</p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Tittle text='give feedback'/>
      <Button text='good'/>
      <Button text='neutral'/>
      <Button text='bad'/>
      <Tittle text='stadistics'/>
      <ShowTextCount text='good' number={good}/>
      <ShowTextCount text='neutral' number={neutral}/>
      <ShowTextCount text='bad' number={bad}/>
    </div>

  )
}

export default App
