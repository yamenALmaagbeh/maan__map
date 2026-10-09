import { memo } from 'react';

// Simple, professional SVGs for audience
const AllIcon = memo(() => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
));

const FemaleIcon = memo(() => (
  // Simple girl/woman figure (dress outline)
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="6" r="4" />
    <path d="M12 10l-4 11h8l-4-11z" />
  </svg>
));

const MaleIcon = memo(() => (
  // Simple boy/man figure (person outline)
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="6" r="4" />
    <path d="M10 10h4a4 4 0 0 1 4 4v7h-3v-5h-2v5H7v-7a4 4 0 0 1 4-4z" />
  </svg>
));

export const audiences = [
  { key: 'all', label: 'للجميع', Icon: AllIcon, color: 'var(--subtle)' },
  { key: 'female', label: 'إناث', Icon: FemaleIcon, color: '#906a77' }, // Soft warm mauve
  { key: 'male', label: 'ذكور', Icon: MaleIcon, color: '#4a6f82' }, // Soft slate blue
];

/** Always returns an array of audience keys. */
export const audiencesOf = (place) => {
  const a = place.audience;
  if (!a) return ['all'];
  return Array.isArray(a) ? a : [a];
};
export const audienceOf = (place) => audiencesOf(place)[0];
export const audienceMeta = (key) => audiences.find((a) => a.key === key) || audiences[0];

/** "All" shows everything; any other choice shows only places tagged with that audience. */
export const matchesAudience = (place, selected) => {
  if (selected === 'all') return true;
  const auds = audiencesOf(place);
  // If the place is for 'all', it matches any filter (male or female)
  if (auds.includes('all')) return true;
  // Otherwise, it must explicitly include the selected filter
  return auds.includes(selected);
};
