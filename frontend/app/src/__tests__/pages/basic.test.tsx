import { act, cleanup, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import mockRouter from 'next-router-mock'
import { RecoilRoot } from 'recoil'

// components
import BasicPage, { getStaticProps } from '../../pages/basic'

/* 実施するテストケース

- Rendering
- Function -> getStaticProps
*/

// mock化
jest.mock('next/dist/client/router', () => require('next-router-mock'))
mockRouter.setCurrentUrl('/')

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

// Testing
describe('Unit -> pages', () => {
  it('Rendering 1', () => {
    act(() => {
      render(
        <RecoilRoot>
          <BasicPage users={[]} />
        </RecoilRoot>,
      )
    })
    // Header.tsx
    expect(screen.getByText('React * Next Testing')).toBeInTheDocument()

    // Main contents
    expect(screen.getByText(/Frontend Test Sample/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()

    // Footer.tsx
    expect(screen.getByText(/Produced by © yt/i)).toBeInTheDocument()
  })
  it('Function -> getStaticProps', async () => {
    const { result } = renderHook(async () => getStaticProps())
    expect((await result.current).props.users).toBeTruthy()
  })
})
