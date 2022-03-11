import { useRecoilValue } from 'recoil'

// contexts
import { textState } from '../../../contexts/BasicAtom'

const GlobalRecoilText = () => {
  const result = useRecoilValue(textState)
  return <p>{result}</p>
}

export default GlobalRecoilText
