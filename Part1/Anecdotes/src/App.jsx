import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setvotes] = useState(Array(anecdotes.length).fill(0))

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const changeAnecdote = () => {
    setSelected(generateRandomNumber())
  }

  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setvotes(copy)
  }

  return (
    <div>
      <Title text='Anecdote of the day'/>
      {anecdotes[selected]}
      <br></br>
      <ShowVotes votes={votes[selected]}/>
      <Button text='vote' handlerClick={addVote}/>
      <Button text='next anecdote' handlerClick={changeAnecdote}/>
      <Title text='Anecdote with most votes'/>
      <ShowMostVoted votes={votes} anecdotes={anecdotes}/>
    </div>
  )
}

const Button = ({ text, handlerClick }) => {
  return (
    <button onClick={handlerClick}>{text}</button>
  );
};

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  );
}

const ShowVotes = ({votes}) => {
  return (
    <p>has {votes} votes</p>
  );
}
const ShowMostVoted = ({votes, anecdotes}) =>{
  const max = Math.max(...votes)
  const index = votes.indexOf(max)
  return (
    <>
      {anecdotes[index]}
      <br></br>
      <ShowVotes votes={votes[index]}/>
    </>
  )
}


export default App
