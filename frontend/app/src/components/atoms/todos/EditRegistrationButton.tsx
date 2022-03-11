import { memo } from 'react'
import { useRecoilValue } from 'recoil'

// contexts
import { editTodosState } from '../../../contexts/TodosAtom'

// hooks
import useTodos from '../../../hooks/useTodos'

// interface
interface Props {
  inputTodo: string
}

const EditRegistrationButton = memo((props: Props) => {
  const { inputTodo } = props
  // Edit all todos
  const editTodo = useRecoilValue(editTodosState)

  const { editRegistrationTodo } = useTodos()
  return (
    <button
      className={`text-xl ml-5 px-10 rounded-md cursor-pointer bg-green-200 hover:bg-green-300 hover:font-bold`}
      onClick={() => editRegistrationTodo(editTodo, inputTodo)}
    >
      Go
    </button>
  )
})

export default EditRegistrationButton
