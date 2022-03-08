/**
 * @param length Number of elements in Array
 * @returns Random index from length.
 */
export const randomI = (length: number): number =>
  Math.floor(Math.random() * length)

/**
 * Gets a random item of list.
 * @param list[] Array of E elements
 * @returns Random E element in list[].
 */
export const getRandomItemI = <E>(list: E[]): E => list[randomI(list.length)]
