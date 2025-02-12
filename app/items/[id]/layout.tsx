import GlobalNavBar from '@/ui/GlobalNavBar'
import styles from '@/styles/Page.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <GlobalNavBar />
      </header>
      {children}
      <footer></footer>
    </>
  )
}
