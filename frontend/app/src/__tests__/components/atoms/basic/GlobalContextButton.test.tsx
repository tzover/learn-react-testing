import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// contexts
import AppProvider, { AppProviders } from '../../../../contexts/AppProvider'

// components
import GlobalContextButton from '../../../../components/atoms/basic/GlobalContextButton'

/* 実施するテストケース

- Rendering
- userEvent onClick
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
              useContextResult: 'TEST',
              setUseContextResult: testFunc,
            }}
          >
            <GlobalContextButton />
          </AppProviders.Provider>
        </AppProvider>,
      )
    })

    expect(screen.getByRole('button', { name: /push/i })).toBeTruthy()
  })
  it('userEvent onClick', () => {
    const testFunc = jest.fn()
    const targetTestFunc = jest.fn()
    act(() => {
      render(
        <AppProvider>
          <AppProviders.Provider
            value={{
              useContextInput: '',
              setUseContextInput: testFunc,
              useContextResult: 'TEST',
              setUseContextResult: targetTestFunc,
            }}
          >
            <GlobalContextButton />
          </AppProviders.Provider>
        </AppProvider>,
      )
    })

    const button = screen.getByRole('button', { name: /push/i })

    userEvent.click(button)

    expect(targetTestFunc).toBeCalled()
  })
})
