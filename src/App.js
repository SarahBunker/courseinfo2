const App1 = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

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
