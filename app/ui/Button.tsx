import Image from 'next/image'
import styles from '@/styles/Button.module.scss'

interface ButtonProps {
  isFontWhite?: boolean
  state?: string
  label?: string
  isCompleted?: boolean
  backgroundColor?: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const { isFontWhite, state, label, backgroundColor, onClick, isCompleted } =
    props
  const fontColor = isFontWhite ? 'white' : 'black'

  return (
    <div
      className={`${styles.buttonWrapper} ${state === 'submit' && styles.hideLabel}`}
    >
      <div className={styles.buttonShadow}></div>
      <button
        className={`${styles.button} ${isCompleted && styles.editable}`}
        style={{ color: `${fontColor}`, backgroundColor: `${backgroundColor}` }}
        onClick={onClick}
      >
        {state === 'submit' && (
          <Image
            src="/button/plus-dark-button.png"
            width={16}
            height={16}
            alt=""
          />
        )}
        {state === 'edit' && (
          <Image
            src="/button/edit-dark-button.png"
            width={16}
            height={16}
            alt=""
          />
        )}
        {state === 'delete' && (
          <Image
            src="/button/delete-light-button.png"
            width={16}
            height={16}
            alt=""
          />
        )}
        <span>{label}</span>
      </button>
    </div>
  )
}
