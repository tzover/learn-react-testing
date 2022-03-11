// useContext
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

// interface
interface ProviderIF {
  useContextInput: string
  setUseContextInput: Dispatch<SetStateAction<string>>
  useContextResult: string
  setUseContextResult: Dispatch<SetStateAction<string>>
}

export const AppProviders = createContext({} as ProviderIF)

const AppProvider: React.FC = ({ children }) => {
  // useState
  const [useContextInput, setUseContextInput] = useState<string>('')
  const [useContextResult, setUseContextResult] = useState<string>('context')

  // return
  return (
    <AppProviders.Provider
      value={{
        useContextInput,
        setUseContextInput,
        useContextResult,
        setUseContextResult,
      }}
    >
      {children}
    </AppProviders.Provider>
  )
}

export default AppProvider
