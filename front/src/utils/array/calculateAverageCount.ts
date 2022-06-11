// countsの平均を返す

interface Props {
  counts: number[]
  isFloor?: boolean
}

export const calculateAverageCount = ({ counts, isFloor = true }: Props) => {
  if (!counts.length) return null

  const average = counts.reduce((sum, elm) => sum + elm) / counts.length

  if (isFloor) {
    return Math.floor(average)
  }

  return average
}
