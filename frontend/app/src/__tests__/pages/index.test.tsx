import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'

// components
import Home from '../../pages/index'

/* 実施するテストケース

- Rendering 1
- Rendering 2
- Click router event
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
      render(<Home />)
    })
    // Header.tsx
    expect(screen.getByText('React * Next Testing')).toBeInTheDocument()

    // Main contents
    expect(screen.getByText(/Frontend Test Sample/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /basic/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /todos/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /blog/i })).toBeTruthy()

    // Footer.tsx
    // expect(screen.getByText('Produced by © yt 2022')).toBeInTheDocument()
    expect(screen.getByText(/Produced by © yt/i)).toBeInTheDocument()
  })
  it('Rendering 2', () => {
    act(() => {
      render(<Home />)
    })
    // Header.tsx
    expect(screen.getByText(/react/i)).toBeInTheDocument()

    // Main contents
    expect(screen.getByText(/Frontend Test Sample/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /basic/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /todos/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /blog/i })).toBeTruthy()

    // Footer.tsx
    expect(screen.getByText(/Produced by © yt/i)).toBeInTheDocument()
  })
  it('Click router event', () => {
    act(() => {
      render(<Home />)
    })

    // button
    const basicButton = screen.getByRole('button', { name: /basic/i })
    const todosButton = screen.getByRole('button', { name: /todos/i })
    const blogButton = screen.getByRole('button', { name: /blog/i })

    // click action1
    userEvent.click(basicButton)

    // routing
    expect(mockRouter.asPath).toBe('basic')

    // click action2
    userEvent.click(todosButton)

    // routing
    expect(mockRouter.asPath).toBe('todos')

    // click action3
    userEvent.click(blogButton)

    // routing
    expect(mockRouter.asPath).toBe('blog')
  })
})
