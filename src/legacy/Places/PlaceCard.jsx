import styles from './PlaceCard.module.css';

function PlaceCard({ place }) {
  const hasImage = place.image && place.image !== null;

  return (
    <article className={styles.card}>
      {/* ── Image ── */}
      {hasImage ? (
        <div className={styles.photoWrap}>
          <img
            src={place.image}
            alt={place.name}
            className={styles.photo}
            loading="lazy"
          />
        </div>
      ) : (
        <div className={styles.photoFallback}>
          <span className={styles.fallbackIcon} aria-hidden="true">
            {place.fallbackIcon || '📍'}
          </span>
          <span className={styles.fallbackText}>صورة توضيحية قريبًا</span>
        </div>
      )}

      {/* ── Body ── */}
      <div className={styles.body}>
        <span className={styles.tag}>{place.categoryLabel}</span>
        <h2 className={styles.name}>{place.name}</h2>
        <p className={styles.desc}>{place.description}</p>

        {/* ── Actions ── */}
        <div className={styles.actions}>
          {place.mapUrl && (
            <a
              href={place.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              الموقع
            </a>
          )}
          {place.sourceUrl && (
            <a
              href={place.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sourceBtn}
            >
              المصدر
            </a>
          )}
          {place.googlePlayUrl && (
            <a
              href={place.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapBtn}
            >
              Google Play
            </a>
          )}
          {place.appStoreUrl && (
            <a
              href={place.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sourceBtn}
            >
              App Store
            </a>
          )}
        </div>

        {/* ── Note ── */}
        {place.note && (
          <small className={styles.note}>{place.note}</small>
        )}
      </div>
    </article>
  );
}

export default PlaceCard;
