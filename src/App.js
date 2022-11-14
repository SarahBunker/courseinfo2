const Header = ({course}) => {
  let name = course.name;
  return <h1>{name}</h1>
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
  return (<p>Number of exercises {total}</p>)
}

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
