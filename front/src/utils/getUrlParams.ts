export const getUrlParams = (params: string) => {
  if (typeof window === 'undefined') return null
  return new URLSearchParams(window.location.search).get(params)
}
