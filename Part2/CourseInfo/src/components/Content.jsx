const Content = ({parts}) =>{
    return(
      <>
        {parts.map(part => 
          <p key={part.id}>
            {part.name} {part.exercises}
          </p>
        )}
      </>
    )
  }

export default Content