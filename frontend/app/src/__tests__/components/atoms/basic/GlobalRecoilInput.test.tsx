import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'

// components
import GlobalRecoilInput from '../../../../components/atoms/basic/GlobalRecoilInput'

/* 実施するテストケース

- Rendering
- userEvent onChange and onKeyPress
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
          <GlobalRecoilInput />
        </RecoilRoot>,
      )
    })

    expect(screen.getByRole('textbox')).toBeTruthy()
  })
  it('userEvent onChange', () => {
    act(() => {
      render(
        <RecoilRoot>
          <GlobalRecoilInput />
        </RecoilRoot>,
      )
    })

    const input = screen.getByRole('textbox')

    // default value
    expect(input).toHaveValue('')

    // userEvent
    userEvent.type(input, 'TEST')

    // change value
    expect(input).toHaveValue('TEST')
  })
  it('userEvent onKeyPress enter', () => {
    act(() => {
      render(
        <RecoilRoot>
          <GlobalRecoilInput />
        </RecoilRoot>,
      )
    })

    const input = screen.getByRole('textbox')

    // default value
    expect(input).toHaveValue('')

    // userEvent
    userEvent.type(input, 'TEST{enter}')

    // change value
    expect(input).toHaveValue('TEST')
  })
})
