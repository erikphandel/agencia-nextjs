import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h3 className={styles.footerLogo}>Agência Next.js</h3>
      <p className={styles.footerText}>contato@agencianext.js</p>
      <p className={styles.footerText}>(55) 5555-5555</p>
    </div>
  )
}