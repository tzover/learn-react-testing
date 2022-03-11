import { useRecoilValue, useSetRecoilState } from 'recoil'

// contexts
import { textState, inputTextState } from '../../../contexts/BasicAtom'

const GlobalRecoilButton = () => {
  const text = useRecoilValue(inputTextState)
  const changeResult = useSetRecoilState(textState)
  return (
    <button
      type='button'
      className='border-2 p-2 hover:bg-pink-100'
      onClick={() => changeResult(text)}
    >
      Push
    </button>
  )
}

export default GlobalRecoilButton
