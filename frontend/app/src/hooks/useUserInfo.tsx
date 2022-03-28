import axios from 'axios'
import { useEffect, useState } from 'react'

// models
import { UserIF } from '../models/user'

// interface
interface UserInfo {
  data: null | UserIF[]
  error: null | string
  loading: boolean
}
const useUserInfo = () => {
  const [response, setResponse] = useState<UserInfo>({
    data: null,
    error: null,
    loading: false,
  })

  const fetchRequest = async () => {
    // loading
    setResponse((prevState) => ({ ...prevState, loading: true }))
    await axios
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
