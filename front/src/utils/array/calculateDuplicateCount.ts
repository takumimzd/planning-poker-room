// arrayの中でduplicateValueがいくつあるかを返す

export interface CalculateDuplicateCountPropsType<T> {
  array: T[]
  duplicateValue: T
}
export const calculateDuplicateCount = <T>({
  array,
  duplicateValue,
}: CalculateDuplicateCountPropsType<T>) => {
  return array.filter((value) => {
    return value === duplicateValue
  }).length
}
