import React from 'react'

const InputUserEvent = () => {
  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='flex justify-between items-center p-3'>
        <div>
          <input
            type='text'
            placeholder='input'
            className='border-2 mr-3 p-2'
          />
          <button type='button' className='border-2 p-2 hover:bg-blue-300'>
            Push
          </button>
        </div>
        <p>Result</p>
      </div>
    </div>
  )
}

export default InputUserEvent
