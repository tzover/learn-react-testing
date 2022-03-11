import { useRecoilState, useSetRecoilState } from 'recoil'

// contexts
import { inputTextState, textState } from '../../../contexts/BasicAtom'

const GlobalRecoilInput = () => {
  const [globalText, setGlobalText] = useRecoilState(inputTextState)
  const changeResult = useSetRecoilState(textState)

  return (
    <input
      type='text'
      placeholder='Recoil sample'
      className='border-2 mr-3 p-2 w-2/3'
      value={globalText}
      onChange={(e) => setGlobalText(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && changeResult(globalText)}
    />
  )
}

export default GlobalRecoilInput
