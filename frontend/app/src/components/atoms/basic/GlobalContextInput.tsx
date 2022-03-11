import { useContext } from 'react'

// contexts
import { AppProviders } from '../../../contexts/AppProvider'

const GlobalContextInput = () => {
  const { useContextInput, setUseContextInput, setUseContextResult } =
    useContext(AppProviders)

  return (
    <input
      type='text'
      placeholder='useContext sample'
      className='border-2 mr-3 p-2 w-2/3'
      value={useContextInput}
      onChange={(e) => setUseContextInput(e.target.value)}
      onKeyPress={(e) =>
        e.key === 'Enter' && setUseContextResult(useContextInput)
      }
    />
  )
}

export default GlobalContextInput
