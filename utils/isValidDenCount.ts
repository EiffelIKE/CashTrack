export const isValidDenCount = ({
  count,
  limit,
}: {
  count: number;
  limit?: number;
}): boolean => {
  const maxCount = limit || 1_000_000;
  return !isNaN(count) && Number.isInteger(count) && count >= 0 && count < maxCount;
};
