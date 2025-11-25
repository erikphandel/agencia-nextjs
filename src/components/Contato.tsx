import styles from "./Contato.module.css"
//A funcionalidade desta página está fora do escopo do exercício proposto

export default function Contato() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label className={styles.formLabel}>Nome:</label>
        <input type="text" required></input>
        <label className={styles.formLabel}>Email:</label>
        <input type="text" required></input>
        <label className={styles.formLabel}>Mensagem:</label>
        <input type="text" required className={styles.formMessageInput}></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}