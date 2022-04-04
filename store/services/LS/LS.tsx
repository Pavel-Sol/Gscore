export const LS = {
  saveToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  },

  getToken() {
    return JSON.parse(localStorage.getItem('token')!);
  },

  removeToken() {
    localStorage.removeItem('token');
  },
};
