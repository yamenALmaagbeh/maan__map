import { regions } from '../../data/regions';
import FilterMenu from './FilterMenu';

function Pin({ size }) {
  return (
    <svg viewBox="0 0 24 24" width={size * 0.8} height={size * 0.8} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" style={{ flex: 'none', color: 'var(--brand)' }}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export default function RegionMenu({ value, onChange }) {
  return (
    <FilterMenu
      options={regions}
      value={value}
      onChange={onChange}
      placeholder="حدد المنطقة"
      title="المنطقة"
      renderIcon={(o, size) => <Pin size={size} />}
    />
  );
}
