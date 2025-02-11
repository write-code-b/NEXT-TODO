import Todo from '@/ui/Todo'
import styles from '@/styles/List.module.scss'

interface Todo {
  id: number
  name: string
  isCompleted: boolean
}

interface ListProps {
  task: Array<Todo>
  label: string
}

export default function List(props: ListProps) {
  const { task, label } = props

  return (
    <div className={styles.list}>
      {label === 'TODO' && (
        <div className={`${styles.tag} ${styles.todo}`}>{label}</div>
      )}
      {label === 'DONE' && (
        <div className={`${styles.tag} ${styles.done}`}>{label}</div>
      )}
      {task?.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
          />
        )
      })}
    </div>
  )
}
