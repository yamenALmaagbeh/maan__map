const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

const make = (children) =>
  function Icon({ size = 18, ...rest }) {
    return <svg {...base} width={size} height={size} {...rest}>{children}</svg>;
  };

export const SearchIcon = make(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>);
export const PinIcon = make(<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>);
export const ExternalIcon = make(<><path d="M14 4h6v6" /><path d="m20 4-9 9" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>);
export const DownloadIcon = make(<><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>);
export const SunIcon = make(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>);
export const MoonIcon = make(<path d="M20.5 15.2A8.6 8.6 0 0 1 8.8 3.5 8.6 8.6 0 1 0 20.5 15.2Z" />);
export const GridIcon = make(<><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" /></>);
export const CapIcon = make(<><path d="m2 9 10-5 10 5-10 5Z" /><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" /></>);
export const BagIcon = make(<><path d="M5.5 8h13l1 12h-15Z" /><path d="M9 8V7a3 3 0 0 1 6 0v1" /></>);
export const BookIcon = make(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z" /><path d="M4 19.5V21h16" /></>);
export const UsersIcon = make(<><path d="M16.5 21v-2a4 4 0 0 0-4-4h-6a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M21.5 21v-2a4 4 0 0 0-3-3.9M15.5 3.1a4 4 0 0 1 0 7.8" /></>);
export const MountainIcon = make(<><path d="m3 20 6.5-11 4 6.5 2.5-4L21 20Z" /><circle cx="17" cy="6" r="1.6" /></>);
export const PhoneIcon = make(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />);
export const CloseIcon = make(<path d="M18 6 6 18M6 6l12 12" />);
export const InfoIcon = make(<><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>);
export const CompassIcon = make(<><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5Z" /></>);

const map = { grid: GridIcon, cap: CapIcon, bag: BagIcon, book: BookIcon, users: UsersIcon, mountain: MountainIcon, pin: PinIcon };
export function CategoryIcon({ name, ...rest }) {
  const Cmp = map[name] || PinIcon;
  return <Cmp {...rest} />;
}
