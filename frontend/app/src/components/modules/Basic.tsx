import { useState } from 'react'
import Image from 'next/image'

// components
import Testing from './basic/Testing'
import RouterEvent from './basic/RouterEvent'
import InputStateEvent from './basic/InputStateEvent'
import FetchEvent from './basic/FetchEvent'
import InputRefEvent from './basic/InputRefEvent'
import PropsButton from './basic/PropsButton'
import GlobalState from './basic/GlobalState'

// models
import { UserIF } from '../../models/user'

interface Props {
  users: UserIF[]
}

const Basic = (props: Props) => {
  const { users } = props

  const [isStyleFlag, setIsStyleFlag] = useState(false)
  return (
    <>
      <div className='flex flex-wrap'>
        <Testing testing='Rendering'>
          {/* text */}
          <div className='border-b-2 p-2'>
            <p>Testing message1</p>
            <p data-testid='msg'>Testing message2</p>
            <p data-testid='change-msg'>Testing message3</p>
          </div>
          {/* button */}
          <div className='flex flex-col border-b-2 p-2'>
            <button className='w-1/4 p-1 my-2 border-2 hover:bg-pink-100'>
              Next
            </button>
            <button className='w-1/4 p-1 my-2 border-2 hover:bg-pink-100'>
              Back
            </button>
            <button
              type='button'
              className='w-1/4 p-1 my-2 border-2 bg-gray-400'
              disabled
            >
              disabled
            </button>
            <PropsButton btnName='NamePropsButton' />
          </div>
          {/* image */}
          <div className='border-b-2 p-2'>
            <Image
              src={'/vercel.svg'}
              width={100}
              height={100}
              alt={'test_img'}
            />
          </div>
          {/* input */}
          <div className='flex flex-col border-b-2 p-2'>
            <input
              type='text'
              placeholder='testing'
              className='border-2 p-2 my-2'
            />
            <div className='p-2 my-2'>
              <input type='checkbox' />
              <label className='mx-2' htmlFor='checkbox'>
                checkbox
              </label>
            </div>
            <input type='range' min='0' max='10' className='py-2 my-2' />
          </div>
        </Testing>

        <Testing testing='Hooks and Function'>
          <InputStateEvent />
          <InputRefEvent />
          <RouterEvent />
          <FetchEvent users={users} />
        </Testing>

        <div className='flex-1'>
          <Testing testing='GlobalState'>
            <GlobalState />
          </Testing>
          <Testing testing='Styling'>
            <div className='flex flex-col border-b-2 p-2'>
              <p className='font-bold text-pink-300'>default text style</p>
              <p className='bg-pink-100'>default background style</p>
              <button className='hover:bg-pink-100 p-2 my-2 border-2'>
                HoverするとStyleが変わる
              </button>
              <button
                className={`p-2 my-2 border-2 ${
                  isStyleFlag ? 'bg-blue-100' : 'bg-pink-100'
                }`}
                onClick={() => setIsStyleFlag(!isStyleFlag)}
                data-testid='style-change-button'
              >
                ClickするとStyleが変わる
              </button>
            </div>
          </Testing>
        </div>
      </div>
    </>
  )
}

export default Basic
