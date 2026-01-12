import { refs } from './refs';

export function renderTask(tasks) {
  const markup = tasks
    .map(
      ({
        title,
        description,
        id,
      }) => `<li class="task-list-item" data-id="${id}">
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
</li>`
    )
    .join('');
  refs.taskList.innerHTML = markup;
}
