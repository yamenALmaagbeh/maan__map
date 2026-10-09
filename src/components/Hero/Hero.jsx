import { useState } from 'react';
import { content } from '../../data/content';
import ThemeToggle from '../ui/ThemeToggle';
import styles from './Hero.module.css';

const NIGHT_IMG = '/images/petra-by-night.jpg';
const DAY_IMG = '/images/hero-light.jpg';

/** Night photo in dark mode, daylight photo in light mode. Remounts on theme change. */
function HeroImage({ src, day }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      src={src}
      alt=""
      fetchPriority="high"
      decoding="async"
      className={`${day ? styles.day : ''} ${loaded ? styles.loaded : ''}`.trim()}
      onLoad={() => setLoaded(true)}
      ref={(el) => { if (el && el.complete && !loaded) setLoaded(true); }}
    />
  );
}

export default function Hero({ theme, onToggleTheme }) {
  const day = theme !== 'dark';
  const src = day ? DAY_IMG : NIGHT_IMG;
  const currentTitle = day ? 'مساحتك للإبداع، التعلّم، واكتشاف أفضل الأماكن الجامعية' : content.heroTitle;

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <HeroImage key={src} src={src} day={day} />
      </div>
      <div className={`${styles.scrim} ${day ? styles.scrimDay : ''}`.trim()} />

      <header className={`container ${styles.header}`}>
        <div className={`${styles.brand} ${styles.rise}`} style={{ '--d': 0 }}>
          <span className={styles.logo}><img src="/images/dalil-maan-logo.png" alt={content.brandLogoAlt} /></span>
          <span className={styles.brandName}>{content.brandName}</span>
        </div>
        <div className={styles.rise} style={{ '--d': 1 }}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </header>

      <div className={`container ${styles.body}`}>
        <div className={styles.copy}>
          <span className={`${styles.label} ${styles.rise}`} style={{ '--d': 2 }}>
            <i className={styles.dot} aria-hidden="true" />
            {content.heroLabel}
          </span>
          <h1 className={`${styles.title} ${styles.rise}`} style={{ '--d': 3 }}>{currentTitle}</h1>
        </div>
      </div>
    </section>
  );
}
