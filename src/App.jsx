import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1320px] m-auto'>
    
   
   <Header></Header>

    </div>
  )
}

export default App
