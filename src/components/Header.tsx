import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.headerTitle} href="/"><h1 className={styles.headerTitle}>Agência Next.js</h1></Link>
      <nav className={styles.headerNav}>
        <Link className={styles.headerLink} href="/">Home</Link>
        <Link className={styles.headerLink} href="/destinos">Destinos</Link>
        <Link className={styles.headerLink} href="/contato">Contato</Link>
      </nav>
    </header>
  )
}