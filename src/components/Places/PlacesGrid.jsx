import PlaceCard from './PlaceCard';
import styles from './PlacesGrid.module.css';

export default function PlacesGrid({ places, onOpen }) {
  return (
    <div className={styles.grid}>
      {places.map((place, i) => (
        <PlaceCard key={place.name} place={place} index={i} onOpen={onOpen} />
      ))}
    </div>
  );
}
