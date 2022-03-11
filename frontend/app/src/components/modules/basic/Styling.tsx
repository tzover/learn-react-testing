import { useState } from 'react'

const Styling = () => {
  const [isStyleFlag, setIsStyleFlag] = useState(false)

  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='my-2'>
        <p className='font-bold text-pink-300'>default text style</p>
      </div>
      <div className='my-2'>
        <p className='bg-pink-100'>default background style</p>
      </div>
      <div className='my-2'>
        <button className='hover:bg-pink-100 p-2 border-2'>
          HoverするとStyleが変わる
        </button>
      </div>
      <div className='my-2'>
        <button
          className={`p-2 border-2 ${
            isStyleFlag ? 'bg-blue-100' : 'bg-pink-100'
          }`}
          onClick={() => setIsStyleFlag(!isStyleFlag)}
          data-testid='style-change-button'
        >
          ClickするとStyleが変わる
        </button>
      </div>
    </div>
  )
}

export default Styling
