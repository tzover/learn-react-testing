import { act, cleanup, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

// components
import ResetButton from '../../../../components/atoms/todos/ResetButton'

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
describe('Unit -> atoms', () => {
  it('Rendering', () => {
    act(() => {
      render(
        <RecoilRoot>
          <ResetButton />
        </RecoilRoot>,
      )
    })

    expect(screen.getByRole('button', { name: /all reset/i })).toBeTruthy()
  })
})
