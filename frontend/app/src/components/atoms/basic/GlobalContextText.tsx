import { useContext } from 'react'

// contexts
import { AppProviders } from '../../../contexts/AppProvider'

const GlobalContextText = () => {
  const { useContextResult } = useContext(AppProviders)
  return <p>{useContextResult}</p>
}

export default GlobalContextText
