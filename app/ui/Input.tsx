import styles from '@/styles/Input.module.scss';

interface InputProps {
  placeholder: string;
}

export default function Input(props: InputProps) {
  const { placeholder } = props;

  return (
    <div>
      <label htmlFor='checklist'></label>
      <div className={styles.checkListInputWrapper}>
        <div className={styles.checkListShadow}></div>
        <input className={styles.checkListInput} type='text' onChange={e => e.target.value} placeholder={placeholder} />
      </div>
    </div>
  );
}
