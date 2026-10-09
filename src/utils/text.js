// Arabic-friendly normalisation so students can search without worrying about
// hamza forms, ta marbuta, diacritics or letter case.
export function normalize(value = '') {
  return value
    .toString()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[إأآٱ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim();
}
