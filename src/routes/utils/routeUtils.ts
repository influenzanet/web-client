export const redirectParameter = 'redirect';

export const urlWithRedirect = (url: string, redirectTo: string): string => {
  return url + `?${redirectParameter}=${redirectTo}`;
}

export const appendParameter = (path: string, parameter: string): string => {
  return path + "/:" + parameter;
}
