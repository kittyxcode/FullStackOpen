import Header from './Header'
import Content from './Content'
import Total from './Total'



const Course = (props) => {
    console.log(props)
    console.log('props.course.name es:')
    console.log(props.course.name)
    return(
        <>
        
            <Header course={props.course.name}/>
            
        </>
    )
}

export default Course