const Header = ({course}) => {
  let name = course.name;
  return <h2>{name}</h2>
}

const Content = ({course}) => {
  let parts = course.parts;
  return (<div>{parts.map( part => <Part part={part} />)}</div>)
}

const Part = ({part}) => {
  let name = part.name;
  let exercises = part.exercises;
  return (<p>
    {name} {exercises}
  </p>)
}

const Total = ({course}) => {
  let parts = course.parts;
  let total = parts.reduce( (total, part) => {
    total += part.exercises;
    return total;
  }, 0)
  return (<p><b>total of {total} exercises</b></p>)
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
