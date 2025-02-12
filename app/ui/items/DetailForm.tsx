'use client'

import { useActionState } from 'react'
import { updateTodoById, deleteTodo, State } from '@/lib/actions'
import Todo from '@/ui/Todo'
import UploadForm from '@/ui/items/UploadForm'
import Button from '@/ui/Button'
import styles from '@/styles/items/DetailForm.module.scss'

interface DetailProps {
  id: number
  name: string
  memo: string
  imageUrl: string | null
  isCompleted: boolean
}

export default function DetailForm(props: DetailProps) {
  const { id, name, memo, imageUrl, isCompleted } = props

  const initialState: State = { message: null, errors: {} }
  const updateTodoWithId = updateTodoById.bind(null, id)
  const [state, formAction] = useActionState(updateTodoWithId, initialState)

  const deleteTodoWithId = deleteTodo.bind(null, id)

  return (
    <>
      <form action={formAction} className={styles.form}>
        <Todo
          key={id}
          id={id}
          name={name}
          isCompleted={isCompleted}
          isEditable={true}
        />
        <div className={styles.checkListDetail}>
          <UploadForm imageSrc={imageUrl} />
          <div className={styles.memo}>
            <div className={styles.title}>Memo</div>
            <textarea
              id="memo"
              name="memo"
              className={styles.content}
              defaultValue={memo}
            />
          </div>
        </div>
        <div className={styles.buttonWrap}>
          <Button label="수정 완료" state={'edit'} />
          <Button
            label="삭제하기"
            state={'delete'}
            isFontWhite={true}
            backgroundColor="#F43F5E"
            onClick={deleteTodoWithId}
          />
        </div>
      </form>
    </>
  )
}
