import GlobalNavBar from '@/ui/GlobalNavBar'
import Form from '@/ui/Form'
import List from '@/ui/ListWrap'
import styles from '@/styles/Page.module.scss'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <GlobalNavBar />
      </header>
      <main className={styles.main}>
        <Form />
        <List />
      </main>
      <footer></footer>
    </div>
  )
}
