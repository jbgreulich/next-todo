import styles from './layout.module.css'

export const siteTitle = 'Next.js ToDo'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        A NEXTJS TODO LIST
      </header>
      <main>{children}</main>
    </div>
  )
}