import React from 'react'

function Cards({name,numbers}) {
  return (
    <div className='border border-1 shadow-sm p-3 mb-5 bg-body-tertiary rounded p-2'>
     <p className='d-flex align-items-center'>{name}<span className='mx-4 px-2 border border-light-subtle' style={{borderRadius:'50%'}}> . </span></p> 
     <h2>{numbers}</h2>
    </div>
  )
}

export default Cards