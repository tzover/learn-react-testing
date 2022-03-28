import Image from 'next/image'
import { memo } from 'react'
import { useRecoilValue } from 'recoil'

// contexts
import { pageState } from '../../../contexts/TodosPagenationAtom'

// hooks
import useTodos from '../../../hooks/useTodos'

export const idCreater = (id: number) => (id === 1 ? 0 : (id - 1) * 5)

// interface
interface Props {
  idx: number
}

const DeleteButton = memo((props: Props) => {
  const { idx } = props
  const pageIdx = useRecoilValue(pageState)
  const { deleteTodo } = useTodos()

  const newId = idx + idCreater(pageIdx)

  return (
    <button
      type='button'
      className='p-2 rounded-3xl hover:bg-red-500 hover:scale-125'
      onClick={() => deleteTodo(newId)}
    >
      <Image src={'/delete.svg'} alt='Delete' width={25} height={25} />
    </button>
  )
})

export default DeleteButton
