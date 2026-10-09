import { content } from '../../data/content';
import { cx } from '../../utils/cx';
import { PinIcon, DownloadIcon, PhoneIcon } from './Icons';
import styles from './PlaceActions.module.css';

/** Renders exactly the links a place has: map (or several labelled locations), phone, Google Play, App Store. */
export default function PlaceActions({ place, size = 'md' }) {
  const link = { target: '_blank', rel: 'noreferrer' };
  return (
    <div className={cx(styles.actions, size === 'lg' && styles.lg)}>
      {place.mapUrl && (
        <a className={cx(styles.btn, styles.primary)} href={place.mapUrl} {...link}>
          <PinIcon size={17} className={styles.icon} />
          <span>{content.mapButton}</span>
        </a>
      )}
      {place.locations && place.locations.map((loc) => (
        <a key={loc.label} className={cx(styles.btn, styles.primary)} href={loc.url} {...link}>
          <PinIcon size={17} className={styles.icon} />
          <span>{loc.label}</span>
        </a>
      ))}
      {place.phone && (
        <a className={cx(styles.btn, styles.primary)} href={`tel:${place.phone}`}>
          <PhoneIcon size={17} className={styles.icon} />
          <span dir="ltr">{place.phone}</span>
        </a>
      )}
      {place.googlePlayUrl && (
        <a className={cx(styles.btn, styles.primary)} href={place.googlePlayUrl} {...link}>
          <DownloadIcon size={17} className={styles.icon} />
          <span>Google Play</span>
        </a>
      )}
      {place.appStoreUrl && (
        <a className={cx(styles.btn, styles.secondary)} href={place.appStoreUrl} {...link}>
          <DownloadIcon size={16} className={styles.icon} />
          <span>App Store</span>
        </a>
      )}
    </div>
  );
}
