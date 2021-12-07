/* eslint-disable react/display-name */
import React, { memo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const MainContainer: React.FC<Props> = memo((props) => {
  const { children } = props
  return <div className='mt-24'>{children}</div>
})

export default MainContainer
