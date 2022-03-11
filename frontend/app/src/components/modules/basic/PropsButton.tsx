// interface
interface Props {
  btnName: string
}

const PropsButton = (props: Props) => {
  const { btnName } = props
  return (
    <button className='w-1/2 p-1 my-2 border-2 hover:bg-pink-100'>
      {btnName}
    </button>
  )
}

export default PropsButton
