import Image from 'next/image';
import styles from '@/styles/Button.module.scss';

interface ButtonProps {
  noData?: boolean;
  state?: string;
  label?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { noData, state, label, onClick } = props;
  const fontColor = noData ? 'white' : 'black';

  return (
    <div className={styles.buttonWrapper}>
      <div className={styles.buttonShadow}></div>
      <button
        className={styles.button}
        style={{ color: `${fontColor}` }}
        onClick={onClick}>
        {state === 'submit' && <Image src='/plus-dark-button.png' width={16} height={16} alt='' />}
        {label}
      </button>
    </div>
  );
}
