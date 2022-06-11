// countsの平均を返す

interface Props {
  counts: number[]
}

export const calculateAverageCount = ({ counts }: Props) => {
  if (!counts.length) return null
  const totalCount = counts.reduce((sum, elm) => sum + elm)
  return totalCount / counts.length
}
