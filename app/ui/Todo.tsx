import { updateTodo } from '@/lib/actions'
import styles from '@/styles/Todo.module.scss'

interface TodoProps {
  id: number
  name: string
  isCompleted: boolean
}

export default function ToDo(props: TodoProps) {
  const { id, name, isCompleted } = props

  const updateTodoIscomplete = updateTodo.bind(null, id, !isCompleted)

  return (
    <form
      action={updateTodoIscomplete}
      className={`${styles.todo} ${isCompleted && styles.active}`}
    >
      <button className={`${styles.checkboxBtn}`}></button>
      {name}
    </form>
  )
}
