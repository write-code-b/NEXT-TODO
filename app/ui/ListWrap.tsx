import { Suspense } from 'react'
import { fetchTodo } from '@/lib/data'
import List from '@/ui/List'
import { ListSkeleton } from '@/ui/Skeleton'
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
      <Suspense fallback={<ListSkeleton />}>
        <List task={todoTask} label={'TODO'} />
      </Suspense>
      {/* DONE */}
      <Suspense fallback={<ListSkeleton />}>
        <List task={doneTask} label={'DONE'} />
      </Suspense>
    </div>
  )
}
