import BtnEvent from './basic/BtnEvent'
import InputEvent from './basic/InputEvent'
import Testing from './basic/Testing'

const Basic = () => {
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
          <InputEvent />
          <BtnEvent />
          axios
        </Testing>

        <Testing testing='Styling'>
          <div className='flex flex-col border-b-2 p-2'>
            <p className='font-bold text-pink-300'>default text style</p>
            <p className='bg-pink-100'>default background style</p>
            <button className='hover:bg-pink-100 p-2 my-2 border-2'>
              HoverするとStyleが変わる
            </button>
            <button className='hover:bg-pink-100 p-2 my-2 border-2'>
              ClickするとStyleが変わる
            </button>
            <button
              type='button'
              className='p-2 my-2 border-2 bg-gray-400'
              disabled
            >
              disabled
            </button>
          </div>
        </Testing>
      </div>
    </>
  )
}

export default Basic
