import Head from 'next/head'

// interface
interface Props {
  title: string
  appName: string
}

const Header: React.FC<Props> = (props) => {
  const { title, appName } = props
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='flex items-center bg-pink-100 shadow-2xl'>
        <div className='p-3'>
          <h1 className='text-2xl font-extrabold bg-clip-text tracking-widest italic text-gray-500'>
            {appName}
          </h1>
        </div>
      </div>
    </>
  )
}

export default Header
