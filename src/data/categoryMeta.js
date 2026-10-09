// Visual metadata only (icon + colour key). The category names themselves come
// from data/places.js and are not modified.
export const categoryMeta = {
  'الكل': { icon: 'grid', tone: 'all' },
  'خدمات طلابية': { icon: 'cap', tone: 'services' },
  'تسوّق': { icon: 'bag', tone: 'shop' },
  'ثقافة ومعرفة': { icon: 'book', tone: 'culture' },
  'شباب ومجتمع': { icon: 'users', tone: 'youth' },
  'ترفيه': { icon: 'mountain', tone: 'fun' },
};
export const metaFor = (category) => categoryMeta[category] || { icon: 'pin', tone: 'all' };
