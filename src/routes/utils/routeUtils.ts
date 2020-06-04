export const redirectParameter = 'redirect';

export const urlWithRedirect = (url: string, redirectTo: string): string => {
  return url + `?${redirectParameter}=${redirectTo}`;
}
