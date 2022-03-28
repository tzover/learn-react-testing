import { act, cleanup, render, screen } from '@testing-library/react'

// contexts
import AppProvider, { AppProviders } from '../../../../contexts/AppProvider'

// components
import GlobalContextText from '../../../../components/atoms/basic/GlobalContextText'

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
            <GlobalContextText />
          </AppProviders.Provider>
        </AppProvider>,
      )
    })

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
