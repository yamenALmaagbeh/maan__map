import styles from './CategoryFilter.module.css';

function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className={styles.filterWrap}>
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.filterBtn} ${
              active === cat.id ? styles.active : ''
            }`}
            onClick={() => onChange(cat.id)}
            aria-pressed={active === cat.id}
          >
            <span className={styles.filterIcon} aria-hidden="true">
              {cat.icon}
            </span>
            <span className={styles.filterLabel}>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
