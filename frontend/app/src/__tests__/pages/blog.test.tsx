import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from '../../contexts/tests/createMockRouter'

// components
import BlogPage from '../../pages/blog'

/* 実施するテストケース

- Rendering
- Click router event
*/

// mock化
jest.mock('next/dist/client/router', () => require('next-router-mock'))
mockRouter.setCurrentUrl('/blog')

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
  it('Rendering', () => {
    act(() => {
      render(<BlogPage />)
    })
    // Header.tsx
    expect(screen.getByText(/react/i)).toBeInTheDocument()

    // Main contents
    expect(screen.getByText(/Frontend Test Sample/i)).toBeInTheDocument()
    expect(screen.getByText('Coming soon...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()

    // Footer.tsx
    expect(screen.getByText(/Produced by © yt/i)).toBeInTheDocument()
  })
  it('Click router event', async () => {
    const router = createMockRouter({
      asPath: '/blog',
    })

    act(() => {
      render(
        <RouterContext.Provider value={router}>
          <BlogPage />
        </RouterContext.Provider>,
      )
    })
    // button
    const button = screen.getByRole('button', { name: /back/i })
    userEvent.click(button)

    // backのテストがうまく書けない historyの扱い方？
  })
})
