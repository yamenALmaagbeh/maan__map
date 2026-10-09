import { useEffect, useRef, useState } from 'react';
import { cx } from '../../utils/cx';
import styles from './AudienceMenu.module.css';

function Chevron() {
  return (
    <svg className={styles.chevron} viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FilterMenu({ options, value, onChange, placeholder, title, renderIcon }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = options.find((o) => o.key === value) || options[0];
  const isDefault = value === options[0].key;
  const shown = isDefault ? placeholder : current.label;

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={cx(styles.trigger, open && styles.open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${title}: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
      >
        {renderIcon(current, 28)}
        <span className={styles.label}>{shown}</span>
        <Chevron />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox" aria-label={title}>
          {options.map((a) => (
            <li key={a.key} role="none">
              <button
                type="button"
                role="option"
                aria-selected={a.key === value}
                className={cx(styles.item, a.key === value && styles.selected)}
                onClick={() => { onChange(a.key); setOpen(false); }}
              >
                {renderIcon(a, 32)}
                <span>{a.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
