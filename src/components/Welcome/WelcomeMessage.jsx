import styles from './WelcomeMessage.module.css';

function WelcomeMessage() {
  return (
    <div className={styles.welcome}>
      <div className={styles.icon} aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>أهلًا بك أيّها الطالب الجديد!</h2>
        <p className={styles.message}>
          هذا الدليل أعدّه فريق «أثر خطوة» التطوعي خصيصًا لك. ستجد هنا
          معلومات عملية عن الأماكن والخدمات التي ستحتاجها خلال دراستك في
          معان — من المطاعم والمقاهي إلى المكتبات والبنوك. نتمنى لك
          رحلة جامعية ممتعة ومثمرة!
        </p>
      </div>
    </div>
  );
}

export default WelcomeMessage;
