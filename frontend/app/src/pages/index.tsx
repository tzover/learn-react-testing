import type { NextPage } from 'next'
import React from 'react'
import BtnEvent from '../components/modules/BtnEvent'
import HoverEvent from '../components/modules/HoverEvent'
import InputUserEvent from '../components/modules/InputEvent'
import MainContainer from '../components/modules/MainContainer'
import DefaultLayout from '../components/templates/DefaultLayout'

const Home: NextPage = () => {
  const title = 'React testing'
  const appTitle = 'React * Next Testing'
  const copyright = 'Aisin Edge Team'

  return (
    <DefaultLayout title={title} appTitle={appTitle} copyright={copyright}>
      <MainContainer>
        <div className='px-10'>
          <div className='flex flex-row gap-10 justify-center '>
            <div>
              <BtnEvent />
            </div>
            <div>
              <HoverEvent />
            </div>
            <div>
              <InputUserEvent />
            </div>
          </div>
        </div>
      </MainContainer>
    </DefaultLayout>
  )
}

export default Home
