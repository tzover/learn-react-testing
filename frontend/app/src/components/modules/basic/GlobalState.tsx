import React from 'react'
import AppProvider from '../../../contexts/AppProvider'

const GlobalState = () => {
  return (
    <div>
      <h3 className='underline'>Recoil components</h3>

      <h3 className='underline'>useContext</h3>
      <AppProvider>
        <input type='text' />
        <button>aaa</button>
      </AppProvider>
    </div>
  )
}

export default GlobalState
