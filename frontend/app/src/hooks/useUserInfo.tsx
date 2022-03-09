import axios from 'axios'
import { useEffect, useState } from 'react'
import { UserIF } from '../models/user'

const useUserInfo = () => {
  const [response, setResponse] = useState<{
    data: null | UserIF[]
    error: null | string
    loading: boolean
  }>({
    data: null,
    error: null,
    loading: false,
  })

  const fetchRequest = () => {
    // loading
    setResponse((prevState) => ({ ...prevState, loading: true }))
    axios
      .get<UserIF[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) =>
        setResponse({
          data: res.data.slice(0, 3),
          error: null,
          loading: false,
        }),
      )
      .catch((err) => {
        console.log(err)
        setResponse({ data: null, error: err, loading: false })
      })
  }

  useEffect(() => {
    fetchRequest()
  }, [])

  return response
}

export default useUserInfo
