// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface User {
  id: number
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>,
) {
  res.status(200).json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'AAAAA' },
    { id: 3, name: 'JB' },
  ])
}
