import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = ()=>{
    // console.log("clicked", Math.random())
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }


  return (
    <>
      <h1>My name is Chai</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
