import { rest } from 'msw'
import users from './apis/users'

export const handlers = [rest.get('/api/users', users.get)]
