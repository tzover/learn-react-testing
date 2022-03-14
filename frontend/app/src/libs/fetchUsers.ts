import axios from 'axios'

// models
import { UserIF } from '../models/user'

export async function fetchUsers() {
  try {
    const response = await axios.get<UserIF[]>(
      'https://jsonplaceholder.typicode.com/users',
    )
    return response.data
  } catch (e) {
    if (axios.isAxiosError(e) && e.response && e.response.status === 400) {
      console.log('400 Error')
      console.log(e.message)
    }
  }
}

export const testUserData: UserIF = {
  id: 0,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
}
