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

const Stadistics = ({good, neutral, bad})=>{
  const all = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * -1) / all
  const positive = (good / all) * 100
  if(all > 0){
    return(
      <>
        <table>
          {/* Tittle como encabezado */}
          <thead>
            <tr>
              <th colSpan="2">
                <Tittle text="Statistics" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StatisdicLine text="Good" number={good} />
            </tr>
            <tr>
              <StatisdicLine text="Neutral" number={neutral} />
            </tr>
            <tr>
              <StatisdicLine text="Bad" number={bad} />
            </tr>
            <tr>
              <StatisdicLine text="All" number={all} />
            </tr>
            <tr>
              <StatisdicLine text="Average" number={`${average.toFixed(1)}%`} />
            </tr>
            <tr>
              <StatisdicLine text="Positives" number={`${positive.toFixed(1)}%`} />
            </tr>
          </tbody>
        </table>  
      </>
    )
  }
  else{
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
}

const StatisdicLine = ({text, number}) =>{
  return(
    <>
      <td>{text}</td>
      <td>{number}</td>
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
      <Tittle text='Give feedback'/>
      <Button text='Good' handleClick = {handlerCountGoodReviews}/>
      <Button text='Neutral' handleClick ={handlerCountNeutralReviews}/>
      <Button text='Bad' handleClick={handlerCountBadReviews}/>
      <Stadistics good={good} neutral={neutral} bad={bad}/>
    </div>

  )
}

export default App
