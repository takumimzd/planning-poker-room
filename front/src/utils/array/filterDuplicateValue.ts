// arrayから重複を削除した新しい配列を返す

export const filterDuplicateValue = <T>(array: T[]) => {
  return array.filter((value, index, array) => {
    return array.indexOf(value) === index
  })
}
