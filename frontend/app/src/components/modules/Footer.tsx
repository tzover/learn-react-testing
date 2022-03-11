import { memo } from 'react'

const Footer = memo(() => {
  return (
    <div
      className='fixed bottom-0 w-full bg-pink-100 p-2 border-t-2 border-gray-500'
      data-testid='footer-container'
    >
      <p
        className='w-11/12 text-right text-gray-500 opacity-80'
        data-testid='footer-text'
      >
        Produced by &copy; yt 2022
      </p>
    </div>
  )
})

export default Footer
