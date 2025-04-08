import { useState } from 'react'
import Card from './Card'
import Chat from './Chat'
import CardDIY from './Components/Card'
import image from './assets/image.png';
function App() {
  
  const myData = {
    name: "rizz",
    bio: "ASDHABDJSAHBDAHSBDWH",
    image: image
  }
  
  return (
    <>
      <h1 className='text-center text-red-500 font-semibold bg-slate-300 p-5 rounded-xl'>I dont know how to use tailwind </h1>
      <Card/>
      <CardDIY name = {myData.name} bio = {myData.bio} image = {myData.image} />
      
    </>
  )
}

export default App
