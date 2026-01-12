import { nanoid } from 'nanoid';
import {
  getFromStorage,
  saveInStorage,
  TASKS_LS_KEY,
} from './local-storage-api';
import { renderTask } from './render-tasks';

let tasks = getFromStorage(TASKS_LS_KEY) ?? [];

export function handleForm(event) {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();
  const taskDescription = event.target.elements.taskDescription.value.trim();

  if (taskName === '' || taskDescription === '') {
    alert('Please, fill all fields');
    return;
  }
  const task = {
    id: nanoid(),
    title: taskName,
    description: taskDescription,
  };
  addTask(task);
  event.target.reset();
}

function addTask(task) {
  tasks.push(task);
  renderTask(tasks);
  saveInStorage(TASKS_LS_KEY, tasks);
}

export function initTasks() {
  renderTask(tasks);
}

export function handleDeleteBtn(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const getItemId = event.target.closest('li').dataset.id;
  tasks = tasks.filter(element => element.id !== getItemId);
  renderTask(tasks);
  saveInStorage(TASKS_LS_KEY, tasks);
}
