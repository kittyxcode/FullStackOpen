const Content = (props) =>{
  console.log('Content props:')
  console.log(props)
    return(
      <>
        {props.parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        )}
      </>
    )
  }

  export default Content