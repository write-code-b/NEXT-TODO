'use client'

import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { updateTodo, State } from '@/lib/actions'
import styles from '@/styles/Todo.module.scss'

interface TodoProps {
  id: number
  name: string
  isCompleted: boolean
  isEditable?: boolean
  setNameEdit?: Dispatch<SetStateAction<string>>
}

export default function ToDo(props: TodoProps) {
  const { id, name, isCompleted, isEditable, setNameEdit } = props

  const updateTodoIscomplete = updateTodo.bind(null, id, !isCompleted)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (setNameEdit) setNameEdit(e.target.value)
  }

  return (
    <div
      className={`${styles.todo} ${isCompleted && styles.active} ${isEditable && styles.editMode} ${isCompleted && "isCompleted"}`}
    >
      <button
        className={styles.checkboxBtn}
        onClick={updateTodoIscomplete}
      ></button>
      {isEditable ? (
        <input
          className={styles.input}
          defaultValue={name}
          id="name"
          name="name"
          required
          onChange={handleChange}
        />
      ) : (
        <Link href={`/items/${id}`}>{name}</Link>
      )}
    </div>
  )
}
