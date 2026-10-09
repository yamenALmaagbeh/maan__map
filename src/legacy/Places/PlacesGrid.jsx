import PlaceCard from './PlaceCard';
import styles from './PlacesGrid.module.css';

function PlacesGrid({ places }) {
  if (!places || places.length === 0) {
    return (
      <div className={styles.empty}>
        <p>لا توجد نتائج لهذا التصنيف</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default PlacesGrid;
