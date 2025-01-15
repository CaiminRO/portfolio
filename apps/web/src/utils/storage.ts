function getLocalStorage(key: string, defaultValue: any): any {
  const stickyValue = localStorage.getItem(key);

  return stickyValue ? JSON.parse(stickyValue) : defaultValue;
}

function setLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}


export const LocalStorageUtil = {
  getLocalStorage,
  setLocalStorage
};
