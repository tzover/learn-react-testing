import { act, cleanup, render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

// components
import Todos from '../../../components/modules/Todos'

/* 実施するテストケース

- Rendering
*/

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

// Testing
describe('Unit -> modules', () => {
  it('Rendering', () => {
    act(() => {
      render(
        <RecoilRoot>
          <Todos />
        </RecoilRoot>,
      )
    })
  })
})
