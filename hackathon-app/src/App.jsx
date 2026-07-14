import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addteam from './components/Addteam'
import Viewteam from './components/Viewteam'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Addteam/>
    <Viewteam/>
      
    </>
  )
}

export default App
