'use client'

import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { updateTodo } from '@/lib/actions'
import styles from '@/styles/Todo.module.scss'

interface TodoProps {
  id: number
  name: string
  isCompleted: boolean
  isEditable?: boolean
  inputValue?: string
  setInputValue?: Dispatch<SetStateAction<string>>
}

export default function ToDo(props: TodoProps) {
  const { id, name, isCompleted, isEditable, inputValue, setInputValue } = props

  const updateTodoIscomplete = updateTodo.bind(null, id, !isCompleted)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setInputValue) setInputValue(e.target.value)
  }

  return (
    <div
      className={`${styles.todo} ${isCompleted && styles.active} ${isEditable && styles.editMode} ${isCompleted && 'isCompleted'}`}
    >
      <button
        className={styles.checkboxBtn}
        onClick={updateTodoIscomplete}
      ></button>
      {isEditable ? (
        <input
          className={styles.input}
          type="text"
          defaultValue={inputValue}
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
      ) : (
        <Link href={`/items/${id}`}>{name}</Link>
      )}
    </div>
  )
}
