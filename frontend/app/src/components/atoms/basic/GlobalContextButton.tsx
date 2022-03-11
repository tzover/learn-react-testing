import { useContext } from 'react'

// contexts
import { AppProviders } from '../../../contexts/AppProvider'

const GlobalContextButton = () => {
  const { useContextInput, setUseContextResult } = useContext(AppProviders)
  return (
    <button
      type='button'
      className='border-2 p-2 hover:bg-pink-100'
      onClick={() => setUseContextResult(useContextInput)}
    >
      Push
    </button>
  )
}

export default GlobalContextButton
