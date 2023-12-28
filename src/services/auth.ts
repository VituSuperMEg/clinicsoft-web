export const TOKEN_WEB = "@clinicsoft-token";

export function isAuthenticated() {
  return localStorage.getItem(TOKEN_WEB) !== null;
}
export function getToken() {
  localStorage.getItem(TOKEN_WEB);
}
export function setToken(token: string) {
  localStorage.setItem(TOKEN_WEB, token);
}
