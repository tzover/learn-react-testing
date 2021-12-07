/* eslint-disable react/display-name */
import React, { ReactNode, memo } from 'react'
import Footer from '../modules/Footer'
import Header from '../modules/Header'
import Navigation from '../modules/Navigation'

interface Props {
  title: string
  appTitle: string
  copyright: string
  children: ReactNode
}

const DefaultLayout: React.FC<Props> = memo((props) => {
  const { children, title, appTitle, copyright } = props
  return (
    <>
      <Header title={title} appTitle={appTitle} />
      {children}
      <Navigation />
      <Footer copyright={copyright} />
    </>
  )
})

export default DefaultLayout
