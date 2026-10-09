import { content } from '../../data/content';
import { MoonIcon, SunIcon } from './Icons';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark';
  const text = dark ? content.themeToLight : content.themeToDark;
  return (
    <button type="button" className={styles.toggle} onClick={onToggle} aria-label={text.label} title={text.label}>
      <span className={styles.icon} key={theme}>{dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}</span>
      <span className={styles.text}>{dark ? content.themeToLight.short : content.themeToDark.short}</span>
    </button>
  );
}
