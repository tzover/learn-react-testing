/* eslint-disable react/display-name */
import React, { ReactNode, memo } from 'react'

// components
import Footer from '../modules/Footer'
import Header from '../modules/Header'

interface Props {
  title: string
  appName: string
  children: ReactNode
}

const Layout: React.FC<Props> = memo((props) => {
  const { children, title, appName } = props
  return (
    <>
      <Header title={title} appName={appName} />
      <div className='px-10 py-8'>{children}</div>
      <Footer />
    </>
  )
})

export default Layout
