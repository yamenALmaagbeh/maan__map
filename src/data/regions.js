// Regions. Every place sets `region` to one of these keys; places without a region
// only appear when "all" is chosen.
export const regions = [
  { key: 'all', label: 'الكل' },
  { key: 'maan', label: 'معان القصبة' },
  { key: 'wadi-musa', label: 'وادي موسى' },
  { key: 'shobak', label: 'الشوبك' },
];

export const regionMeta = (key) => regions.find((r) => r.key === key) || regions[0];

export const matchesRegion = (place, selected) => selected === 'all' || place.region === selected;
