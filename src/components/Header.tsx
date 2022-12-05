import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles['header-app']}>
      <h1 className={styles.title}>todo</h1>
    </header >
  )
}



