import { fetchTodoById } from '@/lib/data'
import TodoDetail from '@/ui/items/DetailForm'
import styles from '@/styles/items/Page.module.scss'

export default async function Home({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const itemId = (await params).id

  const todo = await fetchTodoById(itemId)

  return (
    <main className={styles.main}>
      <div className={styles.checkListDetailWrap}>
        <TodoDetail
          id={todo.id}
          name={todo.name}
          memo={todo.memo}
          imageUrl={todo.imageUrl}
          isCompleted={todo.isCompleted}
        />
      </div>
    </main>
  )
}
