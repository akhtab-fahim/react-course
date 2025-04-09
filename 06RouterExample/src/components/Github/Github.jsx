import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState({})

    useEffect(()=>{
        fetch('https://api.github.com/users/akhtab-fahim')
        .then((res)=>res.json)
        .then((data)=> {
            console.log(data);
            
            setData(data)})
    },[setData])
  return (
    <div>Github Followers : {data.id}</div>
  )
}

export default Github