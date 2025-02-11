import { fetchTodo } from '@/lib/data'
import List from '@/ui/List'
import styles from '@/styles/ListWrap.module.scss'

export default async function ListWrap() {
  const checkList = await fetchTodo()

  const todoTask = checkList.filter(
    (task: { isCompleted: boolean }) => task.isCompleted === false,
  )
  const doneTask = checkList.filter(
    (task: { isCompleted: boolean }) => task.isCompleted === true,
  )

  return (
    <div className={styles.listWrapper}>
      {/* TODO */}
      <List task={todoTask} label={'TODO'} />
      {/* DONE */}
      <List task={doneTask} label={'DONE'} />
    </div>
  )
}
