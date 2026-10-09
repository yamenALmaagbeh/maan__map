import { content } from '../../data/content';
import { InfoIcon } from '../ui/Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.note}>
          <InfoIcon size={20} />
          <span>{content.disclaimer}</span>
        </p>
        <div className={styles.row}>
          <div className={styles.athar}>
            <img src="/images/athar-step-logo.jpg" alt={content.atharLogoAlt} />
            <div>
              <strong>{content.atharTitle}</strong>
              <span>{content.atharSubtitle}</span>
            </div>
          </div>
          <div className={styles.legal}>
            <strong>{content.legalTitle}</strong>
            <span>© {new Date().getFullYear()} {content.legalText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
