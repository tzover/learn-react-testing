// useContext
import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

interface ProviderIF {
  useContextResult: string
  setUseContextResult: Dispatch<SetStateAction<string>>
}

export const AppProviders = createContext({} as ProviderIF)

const AppProvider: React.FC = ({ children }) => {
  // get
  const [useContextResult, setUseContextResult] = useState<string>('')
  return (
    <AppProviders.Provider
      value={{
        useContextResult,
        setUseContextResult,
      }}
    >
      {children}
    </AppProviders.Provider>
  )
}

export default AppProvider
