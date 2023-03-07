

const App = () => {
  const name = 'Peter'
  const age = 10
  console.log("hi")
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
      <Friends />
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      greeting app created by < a href='httpsL//github.com/mluukkai' > mluukkai </a >
    </>
  )
}

const Friends = () => {
  const array = [
    { name: 'Peter', age1: 4 },
    { name: 'Maya', age1: 10 },
  ]
  const friends = ['peter', 'maya', 2]

  return (
    <>
      <p>{array[0].name} {array[0].age1}</p>
      <p>{array[1].name} {array[1].age1}</p>
      <p>{friends}</p>
    </>



  )
}
export default App