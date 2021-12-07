import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  appTitle: string
}

const Header: React.FC<Props> = (props) => {
  const { title, appTitle } = props
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='fixed top-0 w-full bg-pink-100 mb-24'>
        <h1 className='m-4 text-4xl font-bold tracking-widest italic'>
          {appTitle}
        </h1>
      </div>
    </>
  )
}

export default Header
