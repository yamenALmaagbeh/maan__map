import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.heading}>مرحبًا بك في معان</h2>
        <p className={styles.desc}>
          محافظة معان ترحّب بطلابها الجدد — سواء في جامعة الحسين بن طلال أو
          كلية البلقاء التطبيقية فرع معان. هنا ستجد كل ما تحتاجه لتبدأ
          حياتك الجامعية بثقة.
        </p>
      </div>
    </section>
  );
}

export default Hero;
