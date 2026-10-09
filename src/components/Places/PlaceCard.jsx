import { memo } from 'react';
import { content, ui } from '../../data/content';
import { metaFor } from '../../data/categoryMeta';
import { audienceMeta, audiencesOf } from '../../data/audience';
import { cx } from '../../utils/cx';
import { CategoryIcon, PinIcon } from '../ui/Icons';
import SmartImage from '../ui/SmartImage';
import PlaceActions from '../ui/PlaceActions';
import styles from './PlaceCard.module.css';

function PlaceCard({ place, index, onOpen }) {
  const meta = metaFor(place.category);
  const isApp = Boolean(place.googlePlayUrl || place.appStoreUrl);
  const contain = place.imageFit === 'contain';
  const auds = place.hideAudience ? [] : audiencesOf(place).map(audienceMeta);

  return (
    <article
      className={styles.card}
      style={{
        '--i': index,
        '--tone': `var(--tone-${meta.tone})`,
        '--tone-ink': `var(--tone-${meta.tone}-ink)`,
        '--tone-tint': `var(--tone-${meta.tone}-tint)`,
      }}
    >
      <div className={cx(styles.photo, contain && styles.contain)}>
        <SmartImage
          src={place.image}
          alt={place.imageAlt}
          fit={place.imageFit || 'cover'}
          position={place.imagePosition}
          priority={index < 2}
        />
        <span className={styles.badge}>
          <CategoryIcon name={meta.icon} size={15} />
          {place.category}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.area}><PinIcon size={15} />{place.area}</span>
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
        
        <h3 className={styles.title}>
          <button type="button" className={styles.open} onClick={() => onOpen(place)} aria-label={`${ui.details}: ${place.name}`}>
            {place.name}
          </button>
        </h3>
        <p className={styles.desc}>{place.description}</p>
        <div className={styles.foot}>
          <div className={styles.actionRow}>
            <PlaceActions place={place} />
          </div>
          {!isApp && <small className={styles.note}>{content.visitNote}</small>}
        </div>
      </div>
    </article>
  );
}

export default memo(PlaceCard);
