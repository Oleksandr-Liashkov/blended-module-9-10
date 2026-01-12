export function saveInStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const TASKS_LS_KEY = 'tasks';

export function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) ?? null;
}
