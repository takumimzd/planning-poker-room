export const getUrlParams = (params: string) => {
  return new URLSearchParams(window.location.search).get(params)
}
