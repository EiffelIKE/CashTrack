const safeDate = (str: string): number => {
  const time = Date.parse(str);
  return isNaN(time) ? 0 : time;
};

export function sortByModifiedDateSafe<T extends { modificationDate: string }>(
  items: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] {
  return [...items].sort((a, b) => {
    const aTime = safeDate(a.modificationDate);
    const bTime = safeDate(b.modificationDate);
    return order === 'asc' ? aTime - bTime : bTime - aTime;
  });
}