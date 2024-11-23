import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class='firstDiv'>
      <h1>Hello this is my portfolio</h1>
      <h2>this is another header, but smaller</h2>
      </div> 
      <div class='secondDiv'>
      <h1>Hello this is my portfolio</h1>
      <h2>this is another header, but smaller</h2>
      </div> 
      <div class='thirdDiv'>
      <h1>Hello this is my portfolio</h1>
      <h2>this is another header, but smaller</h2>
      </div> 
      <div class='fourthDiv'>
      <h1>Hello this is my portfolio</h1>
      <h2>this is another header, but smaller</h2>
      </div> 
    </>
  )
}

export default App
