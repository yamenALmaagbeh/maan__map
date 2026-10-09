import { useCallback, useMemo, useState } from 'react';
import { categories, places } from './data/places';
import { content, ui } from './data/content';
import { useTheme } from './hooks/useTheme';
import { normalize } from './utils/text';
import { matchesAudience } from './data/audience';
import { matchesRegion } from './data/regions';
import Hero from './components/Hero/Hero';
import Toolbar from './components/Toolbar/Toolbar';
import PlacesGrid from './components/Places/PlacesGrid';
import PlaceSheet from './components/Places/PlaceSheet';
import EmptyState from './components/Places/EmptyState';
import Footer from './components/Layout/Footer';
import styles from './App.module.css';

const ALL = categories[0];

export default function App() {
  const { theme, toggle } = useTheme();
  const [active, setActive] = useState(ALL);
  const [query, setQuery] = useState('');
  const [audience, setAudience] = useState('all');
  const [region, setRegion] = useState('all');
  const [selected, setSelected] = useState(null);

  // First compute the base filtered list ignoring the active category
  const baseFiltered = useMemo(() => {
    const q = normalize(query);
    return places.filter((p) => {
      if (!matchesAudience(p, audience)) return false;
      if (!matchesRegion(p, region)) return false;
      if (!q) return true;
      return normalize(`${p.name} ${p.area} ${p.category} ${p.description}`).includes(q);
    });
  }, [query, audience, region]);

  // Then calculate counts based on this base filtered list
  const counts = useMemo(() => {
    const result = { [ALL]: baseFiltered.length };
    categories.slice(1).forEach((c) => { 
      result[c] = baseFiltered.filter((p) => p.category === c).length; 
    });
    return result;
  }, [baseFiltered]);

  // Finally compute the actual filtered list (applying the active category)
  const filtered = useMemo(() => {
    if (active === ALL) return baseFiltered;
    return baseFiltered.filter((p) => p.category === active);
  }, [active, baseFiltered]);

  const reset = useCallback(() => { setActive(ALL); setQuery(''); setAudience('all'); setRegion('all'); }, []);
  const closeSheet = useCallback(() => setSelected(null), []);

  return (
    <div className={styles.page}>
      <Hero theme={theme} onToggleTheme={toggle} />
      <Toolbar categories={categories} counts={counts} active={active} onCategory={setActive} query={query} onQuery={setQuery} audience={audience} onAudience={setAudience} region={region} onRegion={setRegion} />

      <main className={`container ${styles.main}`} id="places">
        <div className={styles.head}>
          <h2>{content.filterLabel}</h2>
          <strong aria-live="polite">{filtered.length} {filtered.length === 1 ? ui.place : ui.places}</strong>
        </div>
        {filtered.length ? (
          <PlacesGrid key={`${active}-${audience}-${region}`} places={filtered} onOpen={setSelected} />
        ) : (
          <EmptyState onReset={reset} />
        )}
      </main>

      <Footer />
      {selected && <PlaceSheet place={selected} onClosed={closeSheet} />}
    </div>
  );
}
