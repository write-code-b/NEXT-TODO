'use client'

import { useState, useActionState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
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

  const [inputValue, setInputValue] = useState(name)
  const initialState: State = { message: null, errors: {} }
  const updateTodoWithId = updateTodoById.bind(null, id)
  const [state, formAction] = useActionState(updateTodoWithId, initialState)

  const deleteTodoWithId = deleteTodo.bind(null, id)

  const editNotify = () => {
    if (inputValue) toast('수정했습니다.')
  }
  const deleteNotify = () => toast('삭제했습니다.')

  return (
    <>
      <form action={formAction} className={styles.form}>
        <Todo
          key={id}
          id={id}
          name={name}
          isCompleted={isCompleted}
          isEditable={true}
          inputValue={inputValue}
          setInputValue={setInputValue}
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
          <Button label="수정 완료" state={'edit'} onClick={editNotify} />
          <Button
            label="삭제하기"
            state={'delete'}
            isFontWhite={true}
            backgroundColor="#F43F5E"
            onClick={() => {
              deleteTodoWithId()
              deleteNotify()
            }}
          />
          <ToastContainer/>
        </div>
      </form>
    </>
  )
}
