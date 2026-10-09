import { useState } from 'react';
import { cx } from '../../utils/cx';
import styles from './SmartImage.module.css';

/** Image with a skeleton shimmer until it has loaded. */
export default function SmartImage({ src, alt, fit = 'cover', position = 'center', className, priority = false }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={cx(styles.frame, loaded && styles.done, className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        ref={(el) => { if (el && el.complete && !loaded) setLoaded(true); }}
        style={{ objectFit: fit, objectPosition: position }}
        className={styles.img}
      />
    </span>
  );
}
