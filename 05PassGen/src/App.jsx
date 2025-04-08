import viteLogo from '/vite.svg'
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { useCallback } from 'react'

function App() {

const [length,setLength] = useState(10)
const [num,setNum] = useState(false)
const [char,setChar] = useState(false)
const [password,setPassword] = useState("")


const passwordRef = useRef()

  const passwordGenerator = useCallback(() =>{
    let charecters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

    if(num) charecters = charecters.concat("0123456789".split(''))
    if(char) charecters = charecters.concat("!@#$%^&*".split(''))

    let pass = ""

    for(let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * charecters.length)
      pass += charecters[index]
    }
    setPassword(pass)
  }
  ,[num,length,char,setPassword])

  const copyPassToClip = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  }
  ,[password])


  useEffect(()=>{passwordGenerator()},[length,num,char,passwordGenerator])


  return (
    <>
    <div className='outline-solid w-full max-w-md mx-auto -shadow-md rounded-lg px-8 py-5 my-8 text-orange-500 bg-grey-400'>
      Password generator
      <div className='outline-solid flex rounded-lg overflow-hidden mt-3 mb-4'>
        <input type="text" value={password} ref={passwordRef} readOnly className='outline-none w-dull py-1 px-3'
          placeholder='password'
        />
        <button className='shadow-md' onClick={copyPassToClip}>
          Copy
        </button>

      </div>
      <div className='outline-solid flex rounded-lg gap-x-2 '>
        <input type="checkbox" name="Numbers" id="" onChange={()=> {setNum((prev)=>!prev)}}/>
        <label htmlFor="">Numbers</label>
        <input type="checkbox" name="Charecters" id="" onChange={()=> setChar((prev)=>!prev)}/>
        <label htmlFor="">Charecters</label>
        <input type="range" min={5} max={20} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length : {length}</label>
      </div>
    </div>
    </>
  )
}

export default App
