// contexts
import AppProvider from '../../../contexts/AppProvider'

// components
import GlobalRecoilButton from '../../atoms/basic/GlobalRecoilButton'
import GlobalRecoilInput from '../../atoms/basic/GlobalRecoilInput'
import GlobalRecoilText from '../../atoms/basic/GlobalRecoilText'
import GlobalContextInput from '../../atoms/basic/GlobalContextInput'
import GlobalContextButton from '../../atoms/basic/GlobalContextButton'
import GlobalContextText from '../../atoms/basic/GlobalContextText'


const GlobalState = () => {
  return (
    <div>
      <h3 className='underline'>Recoil components</h3>
      <div className='flex justify-between items-center p-3'>
        <div>
          <GlobalRecoilInput />
          <GlobalRecoilButton />
        </div>
        <GlobalRecoilText />
      </div>
      <h3 className='underline'>useContext</h3>
      <AppProvider>
        <div className='flex justify-between items-center p-3'>
          <div>
            <GlobalContextInput />
            <GlobalContextButton />
          </div>
          <GlobalContextText />
        </div>
      </AppProvider>
    </div>
  )
}

export default GlobalState
