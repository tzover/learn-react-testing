import React from 'react'

const InputUserEvent = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='border-b-2 text-2xl'>Input Event</h2>
      <div className='p-3'>
        <input type='text' placeholder='input' className='border-2 mr-3 p-2' />
        <button type='button' className='border-2 p-2 hover:bg-blue-300'>
          Push
        </button>
      </div>
    </div>
  )
}

export default InputUserEvent
