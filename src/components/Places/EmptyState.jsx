import { ui } from '../../data/content';
import { CompassIcon } from '../ui/Icons';
import styles from './EmptyState.module.css';

export default function EmptyState({ onReset }) {
  return (
    <div className={styles.empty} role="status">
      <span className={styles.icon}><CompassIcon size={34} /></span>
      <h3>{ui.emptyTitle}</h3>
      <p>{ui.emptyText}</p>
      <button type="button" className={styles.btn} onClick={onReset}>{ui.emptyAction}</button>
    </div>
  );
}
