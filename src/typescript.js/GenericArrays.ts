function reverseArray<T>(
  items: T[]
): T[] {
  return [...items].reverse();
}

reverseArray([1, 2, 3]);