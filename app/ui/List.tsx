import Image from 'next/image'
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
        <>
          <div className={`${styles.tag} ${styles.todo}`}>{label}</div>
          {task.length === 0 && (
            <>
              <Image
                src="/default/default-todo.svg"
                width={240}
                height={240}
                alt="no todo data"
              />
              <div className={styles.emptyMessage}>
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </div>
            </>
          )}
        </>
      )}
      {label === 'DONE' && (
        <>
          <div className={`${styles.tag} ${styles.done}`}>{label}</div>
          {task.length === 0 && (
            <>
              <Image
                src="/default/default-done.svg"
                width={240}
                height={240}
                alt="no done data"
              />
              <div className={styles.emptyMessage}>
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </div>
            </>
          )}
        </>
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
