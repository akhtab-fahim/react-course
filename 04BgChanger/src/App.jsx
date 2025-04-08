import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")
  const changeColor = (newColor) => {
    setColor(newColor);
  }

  return (
    <div className='h-screen w-full' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12'>
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          <button onClick={() => changeColor('red')} className='outline-none px-4 bg-red-500'>Red</button>
          <button onClick={() => changeColor('green')} className='outline-none px-4 bg-green-500'>Green</button>
          <button onClick={() => changeColor('#808000')} className='outline-none px-4 bg-olive-500'>Olive</button>
          <button onClick={() => changeColor('pink')} className='outline-none px-4 bg-pink-500'>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
