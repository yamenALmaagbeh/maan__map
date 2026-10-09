import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.brand}>
          <img
            src="/images/athar-step-logo.jpg"
            alt="شعار فريق أثر خطوة"
            className={styles.logo}
          />
          <div className={styles.brandText}>
            <span className={styles.eyebrow}>مبادرة أثر خطوة</span>
            <h1 className={styles.title}>
              دليل <span className={styles.titleAccent}>معان</span>
            </h1>
            <p className={styles.subtitle}>دليلك الشامل للطالب الجديد</p>
          </div>
        </div>
      </div>
      <div className={styles.headerDeco} aria-hidden="true" />
    </header>
  );
}

export default Header;
