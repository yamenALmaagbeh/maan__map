import { useCallback, useEffect, useRef, useState } from 'react';
import { content, ui } from '../../data/content';
import { metaFor } from '../../data/categoryMeta';
import { audienceMeta, audiencesOf } from '../../data/audience';
import { cx } from '../../utils/cx';
import { CategoryIcon, CloseIcon, PinIcon } from '../ui/Icons';
import SmartImage from '../ui/SmartImage';
import PlaceActions from '../ui/PlaceActions';
import styles from './PlaceSheet.module.css';

const EXIT_MS = 220;

/** Detail dialog: centred card on desktop, bottom sheet on mobile. */
export default function PlaceSheet({ place, onClosed }) {
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocus = useRef(null);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(onClosed, EXIT_MS);
  }, [onClosed]);

  useEffect(() => {
    returnFocus.current = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      if (returnFocus.current && document.contains(returnFocus.current)) returnFocus.current.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  const meta = metaFor(place.category);
  const isApp = Boolean(place.googlePlayUrl || place.appStoreUrl);
  const contain = place.imageFit === 'contain';
  const auds = place.hideAudience ? [] : audiencesOf(place).map(audienceMeta);

  return (
    <div className={cx(styles.overlay, closing && styles.closing)} onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="place-sheet-title"
        style={{ '--tone': `var(--tone-${meta.tone})`, '--tone-ink': `var(--tone-${meta.tone}-ink)`, '--tone-tint': `var(--tone-${meta.tone}-tint)` }}
      >
        <button ref={closeRef} type="button" className={styles.close} onClick={close} aria-label={ui.close}>
          <CloseIcon size={20} />
        </button>
        <div className={cx(styles.photo, contain && styles.contain)}>
          <SmartImage src={place.image} alt={place.imageAlt} fit={place.imageFit || 'cover'} position={place.imagePosition} priority />
        </div>
        <div className={styles.body}>
          <span className={styles.badge}><CategoryIcon name={meta.icon} size={15} />{place.category}</span>
          <h2 id="place-sheet-title" className={styles.title}>{place.name}</h2>
          
          <div className={styles.metaRow}>
            <span className={styles.area}><PinIcon size={16} />{place.area}</span>
            {auds.length > 0 && (
              <div className={styles.audienceTags}>
                {auds.map(aud => {
                  const Icon = aud.Icon;
                  return (
                    <span key={aud.key} className={styles.audTag} style={{ color: aud.color, backgroundColor: `${aud.color}15` }}>
                      <Icon />
                      {aud.label}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          <p className={styles.desc}>{place.description}</p>
          <PlaceActions place={place} size="lg" />
          {!isApp && <small className={styles.note}>{content.visitNote}</small>}
        </div>
      </div>
    </div>
  );
}
