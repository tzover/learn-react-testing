import { render } from '@testing-library/react'
import UserList from '../../components/UserList'
import { server } from '../../mocks/server'

describe('TEST', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('Rendering', async () => {
    const { findByText, queryAllByTestId } = render(<UserList />)
    expect(await findByText('Loadiang...')).toBeInTheDocument()
    expect(queryAllByTestId('users')).toHaveLength(0)
  })
})
