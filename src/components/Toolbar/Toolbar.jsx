import { useRef, useState } from 'react';
import { CategoryIcon, SearchIcon, CloseIcon } from '../ui/Icons';
import { metaFor } from '../../data/categoryMeta';
import { ui } from '../../data/content';
import { cx } from '../../utils/cx';
import AudienceMenu from '../ui/AudienceMenu';
import RegionMenu from '../ui/RegionMenu';
import styles from './Toolbar.module.css';

export default function Toolbar({ categories, counts, active, onCategory, query, onQuery, audience, onAudience, region, onRegion }) {
  const rail = useRef(null);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });
  const [dragging, setDragging] = useState(false);

  // Mouse drag-to-scroll (touch already scrolls natively).
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { down: true, moved: false, x: e.clientX, left: rail.current.scrollLeft };
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 4) { d.moved = true; setDragging(true); }
    if (d.moved) rail.current.scrollLeft = d.left - dx;
  };
  const endDrag = () => { drag.current.down = false; setDragging(false); };
  const onClickCapture = (e) => {
    if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; }
  };

  return (
    <div className={`container ${styles.wrap}`}>
      <div className={styles.panel}>
        <div className={styles.searchRow}>
        <label className={styles.search}>
          <span className="sr-only">{ui.searchLabel}</span>
          <SearchIcon size={20} className={styles.searchIcon} />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={ui.searchPlaceholder}
            autoComplete="off"
            enterKeyHint="search"
          />
          {query && (
            <button type="button" className={styles.clear} onClick={() => onQuery('')} aria-label={ui.clearSearch}>
              <CloseIcon size={16} />
            </button>
          )}
        </label>
        <div className={styles.menus}>
          <AudienceMenu value={audience} onChange={onAudience} />
          <RegionMenu value={region} onChange={onRegion} />
        </div>
        </div>

        <div
          ref={rail}
          className={cx(styles.chips, dragging && styles.dragging)}
          role="group"
          aria-label="تصفية الأماكن حسب الفئة"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {categories.map((category) => {
            const meta = metaFor(category);
            const on = active === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={on}
                className={cx(styles.chip, on && styles.on)}
                style={{ '--tone': `var(--tone-${meta.tone})`, '--tone-ink': `var(--tone-${meta.tone}-ink)`, '--tone-tint': `var(--tone-${meta.tone}-tint)` }}
                onClick={() => onCategory(category)}
              >
                <CategoryIcon name={meta.icon} size={17} />
                <span>{category}</span>
                <b className={styles.count}>{counts[category]}</b>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
