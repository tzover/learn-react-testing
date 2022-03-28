import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// contexts
import AppProvider, { AppProviders } from '../../../../contexts/AppProvider'

// components
import GlobalContextInput from '../../../../components/atoms/basic/GlobalContextInput'

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
    const testFunc = jest.fn()
    act(() => {
      render(
        <AppProvider>
          <AppProviders.Provider
            value={{
              useContextInput: '',
              setUseContextInput: testFunc,
              useContextResult: '',
              setUseContextResult: testFunc,
            }}
          >
            <GlobalContextInput />
          </AppProviders.Provider>
        </AppProvider>,
      )
    })

    expect(screen.getByRole('textbox')).toBeTruthy()
  })
  it('userEvent onChange', () => {
    const testFunc = jest.fn()
    const targetTestFunc = jest.fn()

    act(() => {
      render(
        <AppProvider>
          <AppProviders.Provider
            value={{
              useContextInput: '',
              setUseContextInput: targetTestFunc,
              useContextResult: '',
              setUseContextResult: testFunc,
            }}
          >
            <GlobalContextInput />
          </AppProviders.Provider>
        </AppProvider>,
      )
    })

    const input = screen.getByRole('textbox')

    // default value
    expect(input).toHaveValue('')

    // userEvent
    userEvent.type(input, 'TEST')

    // change value
    expect(targetTestFunc).toBeCalledWith('T')
    expect(targetTestFunc).toBeCalledWith('E')
    expect(targetTestFunc).toBeCalledWith('S')
    expect(targetTestFunc).toBeCalledWith('T')
  })
  it('userEvent onKeyPress enter', () => {
    const testFunc = jest.fn()
    const targetTestFunc = jest.fn()

    act(() => {
      render(
        <AppProvider>
          <AppProviders.Provider
            value={{
              useContextInput: '',
              setUseContextInput: testFunc,
              useContextResult: '',
              setUseContextResult: targetTestFunc,
            }}
          >
            <GlobalContextInput />
          </AppProviders.Provider>
        </AppProvider>,
      )
    })

    const input = screen.getByRole('textbox')

    // default value
    expect(input).toHaveValue('')

    // userEvent
    userEvent.type(input, 'TEST{enter}')

    // change value
    expect(targetTestFunc).toBeCalled()
  })
})
