import styles from '@/styles/Page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}></header>
      <main className={styles.main}></main>
      <footer></footer>
    </div>
  );
}
