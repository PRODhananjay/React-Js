import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(falses)
  const [password, setPassword] = useState ("")

  const passwordGenerator = useCallback(() =>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "01123456789"
    if(charAllowed) str += "90*&^%$#@!*-+/"

    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
      
    }

    setPassword(pass)


  }, [length,numberAllowed,charAllowed,setPassword])

  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
    </>
  )
}

export default App
