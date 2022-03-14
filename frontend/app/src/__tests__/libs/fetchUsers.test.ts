jest.mock('axios')
import axios from 'axios'
import { cleanup } from '@testing-library/react'

// libs
import { fetchUsers, testUserData } from '../../libs/fetchUsers'

// mock
const mockedAxios = axios as jest.Mocked<typeof axios>

/* 実施するテストケース

- Function -> fetchUsers
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
describe('Unit -> libs', () => {
  it('fetchUsers resolve', async () => {
    mockedAxios.get.mockResolvedValue({ data: testUserData })

    console.log(await fetchUsers())
    expect(await fetchUsers()).toBe(testUserData)
  })
  it('fetchUsers reject', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Async error'))

    await fetchUsers()
    console.log(await fetchUsers())
    // expect(res.message).toBe('Mock response!!!')
  })
})
