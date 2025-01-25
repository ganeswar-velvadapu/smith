import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='bg-blue-100 text-blue-500 flex justify-center items-center p-4'>
        <h1 className='text-5xl'>{title}</h1>
    </div>
  )
}

export default Heading