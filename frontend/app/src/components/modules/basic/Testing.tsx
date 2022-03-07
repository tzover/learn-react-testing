import { memo, ReactNode } from 'react'

interface Props {
  testing: string
  children: ReactNode
}

const Testing = memo((props: Props) => {
  const { testing, children } = props
  return (
    <div className='flex-1 m-3'>
      <h3 className='font-bold'>{testing}</h3>
      <div className='shadow-2xl rounded-2xl px-5 py-10'>{children}</div>
    </div>
  )
})

export default Testing
