import axios, { AxiosError } from 'axios'
import { useState, useEffect, useCallback } from 'react'

interface User {
  id: number
  name: string
}

interface FetchResult {
  data: null | User[]
  error: null | string
  loading: boolean
}

const UserList = () => {
  const [response, setResponse] = useState<FetchResult>({
    data: null,
    error: null,
    loading: true,
  })

  const fetchRequest = async () => {
    // loading
    setResponse((prevState) => ({ ...prevState, loading: true }))
    await axios
      .get<User[]>('/api/users')
      .then((res) =>
        setResponse({
          data: res.data,
          error: null,
          loading: false,
        }),
      )
      .catch((err: AxiosError) => {
        console.log(err)
        setResponse({ data: null, error: err.message, loading: false })
      })
  }

  const renderResult = useCallback((res: FetchResult) => {
    if (res.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    } else if (res.error) {
      return (
        <div>
          <p>Error!!!!</p>
        </div>
      )
    } else {
      return (
        <div data-testid='users'>
          {res.data &&
            res.data.map((item) => (
              <div key={item.id}>
                <p>Name: {item.name}</p>
              </div>
            ))}
        </div>
      )
    }
  }, [])

  useEffect(() => {
    fetchRequest()
  }, [])

  return <div>{renderResult(response)}</div>
}

export default UserList
