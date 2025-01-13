const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <li key={note.id}>
            {note.content}//continua aqui
          </li>
        )}
      </ul>
    </div>
  )
}

export default App