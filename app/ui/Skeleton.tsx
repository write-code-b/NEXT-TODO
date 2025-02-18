import styles from '@/styles/Skeleton.module.scss'

export function ListSkeleton() {
  return (
    <div className={styles.wrap}>
      <div className={styles.tag}></div>
      <div className={styles.skeleton}></div>
      <div className={styles.skeleton}></div>
      <div className={styles.skeleton}></div>
    </div>
  )
}
