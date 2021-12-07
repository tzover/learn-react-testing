/* eslint-disable react/display-name */
import React, { memo } from 'react'

interface Props {
  copyright: string
}

const Footer: React.FC<Props> = memo((props) => {
  const { copyright } = props
  return (
    <div className='fixed bottom-0 w-full bg-pink-100'>
      <p className='text-right mx-4 my-2 text-xs sm:text-base md:text-xl'>
        &copy; {copyright} 2021
      </p>
    </div>
  )
})

export default Footer
