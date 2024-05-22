export const showItemsPerPage = <T>(
  arr: Array<T>,
  numberOfItems: number
): Array<T> => {
  if (arr.length === 0 || numberOfItems <= 0) {
    return [];
  }
  return arr.slice(0, numberOfItems);
};
