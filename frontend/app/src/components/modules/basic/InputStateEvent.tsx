import { useCallback, useState } from 'react'

const InputStateEvent = () => {
  const [text, setText] = useState('')
  const [result, setResult] = useState('Result')

  const changeResult = useCallback((value: string) => {
    if (!value) return
    setResult(value)
    setText('')
  }, [])

  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='flex justify-between items-center p-3'>
        <div>
          <input
            type='text'
            placeholder='useState sample'
            className='border-2 mr-3 p-2 w-2/3'
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && changeResult(text)}
          />
          <button
            type='button'
            className='border-2 p-2 hover:bg-pink-100'
            onClick={() => changeResult(text)}
          >
            Push
          </button>
        </div>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default InputStateEvent
