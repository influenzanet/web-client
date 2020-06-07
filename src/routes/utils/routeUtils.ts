export const redirectParameter = 'redirect';

export const urlWithRedirect = (url: string, redirectTo: string): string => {
  return url + `?${redirectParameter}=${redirectTo}`;
}

export const appendParameterToPath = (path: string, parameter: string): string => {
  return path + "/:" + parameter;
}

export const appendParameter = (path: string, parameter: string): string => {
  return path + "/" + parameter;
}
