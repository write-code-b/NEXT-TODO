'use client';

import { useState, useActionState } from 'react';
import { createTodo } from '@/lib/actions';
import Button from '@/ui/Button';
import styles from '@/styles/Form.module.scss';

export default function Form() {
  const [formData, setFormData] = useState({ name: '' });
  
  const [state, formAction] = useActionState(createTodo, formData);

  return (
    <form action={formAction} className={styles.checkListInputWrapper}>
      <label htmlFor="checklist"></label>
      <div className={styles.checkListInputWrapper}>
        <div className={styles.checkListShadow}></div>
        <input
          id="name"
          name="name"
          className={styles.checkListInput}
          type="text"
          placeholder={'할 일을 입력해주세요'}
          required
        />
      </div>
      <Button label="추가하기" state={'submit'} isFontWhite={false} />
    </form>
  )
}
