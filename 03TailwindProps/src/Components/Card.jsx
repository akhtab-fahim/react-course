import React from 'react'

function CardDIY(props) {
    console.log(props);
    
return (
    <>
            <div className='bg-slate-600 m-10 font-medium rounded-xl flex flex-col items-center justify-center text-center p-5'>
                    <img className=' h-40 w-50 shadow-xl rounded-xl mb-4 mt-2' src={props.image} alt="" />
                    <h2 className='font-sans font-extrabold m-3 text-lg'>Hey! {props.name}</h2>
                    <p className='text-sm'>{props.bio}</p>
            </div>
    </>
)
}

export default CardDIY