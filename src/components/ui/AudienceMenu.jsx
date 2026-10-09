import { audiences } from '../../data/audience';
import FilterMenu from './FilterMenu';

export default function AudienceMenu({ value, onChange }) {
  return (
    <FilterMenu
      options={audiences}
      value={value}
      onChange={onChange}
      placeholder="حدد الفئة"
      title="الفئة"
      renderIcon={() => null} // User specifically asked to remove the logo from the filter menu completely
    />
  );
}
