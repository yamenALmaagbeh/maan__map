import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <strong className={styles.teamName}>فريق أثر خطوة</strong>
          <span className={styles.tagline}>نصنع الأثر بكل خطوة</span>
        </div>
        <div className={styles.info}>
          <span className={styles.copy}>
            دليل معان &copy; {new Date().getFullYear()} — مبادرة تطوعية
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
