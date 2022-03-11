import type { AppProps } from 'next/app'
import Head from 'next/head'

// styling
import '../styles/globals.css'

// contexts
import { title } from '../contexts/AppBasicContext'
import { RecoilRoot } from 'recoil'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='A Single Page Application Produced by yt'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}
export default App
