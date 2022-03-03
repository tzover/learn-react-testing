interface Props {
  title: string
}

const SubTitle = (props: Props) => {
  const { title } = props
  return (
    <>
      <h2 className='text-3xl font-extrabold tracking-widest text-gray-700'>
        {title}
      </h2>
      <div className='p-5'>
        <p className='text-2xl tracking-widest'>Frontend Test Sample</p>
      </div>
    </>
  )
}

export default SubTitle
