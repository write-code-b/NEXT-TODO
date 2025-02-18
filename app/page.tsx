import GlobalNavBar from '@/ui/GlobalNavBar'
import Form from '@/ui/InputForm'
import List from '@/ui/ListWrap'
import styles from '@/styles/Page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <GlobalNavBar />
      </header>
      <main className={styles.main}>
        <div className={styles.checkList}>
          <Form />
          <List />
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
