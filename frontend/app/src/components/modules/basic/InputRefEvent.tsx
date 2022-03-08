import { useCallback, useRef, useState } from 'react'

const InputRefEvent = () => {
  const refText = useRef<HTMLInputElement | null>(null)
  const [result, setResult] = useState('Result')

  const changeResult = useCallback((value: string | undefined) => {
    if (!value) return
    setResult(value)
  }, [])

  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='flex justify-between items-center p-3'>
        <div>
          <input
            type='text'
            placeholder='useRef sample'
            className='border-2 mr-3 p-2 w-2/3 focus:ring focus:ring-pink-200'
            ref={refText}
            onKeyPress={(e) =>
              e.key === 'Enter' && changeResult(refText.current?.value)
            }
          />
          <button
            type='button'
            className='border-2 p-2 hover:bg-pink-100'
            onClick={() => changeResult(refText.current?.value)}
          >
            Push
          </button>
        </div>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default InputRefEvent
