const Content = (props) =>{
    return(
      <>
        <Part parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </>
    )
  }

  export default Content