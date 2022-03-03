import React from 'react'

const HoverEvent = () => {
  return (
    <div className='flex flex-col'>
      <h2 className='border-b-2 text-2xl'>Hover Event</h2>
      <div className='p-3'>
        <p className='hover:bg-blue-300'>HoverするとStyleが変わる</p>
      </div>
    </div>
  )
}

export default HoverEvent
