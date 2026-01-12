export function handleForm(event) {
  event.preventDefault();
  const taskName = event.target.elements.taskName.value.trim();
  const taskDescription = event.target.elements.taskDescription.value.trim();

  if (taskName === '' || taskDescription === '') {
    alert('Please, fill all fields');
    return;
  }
  const task = {
    title: taskName,
    description: taskDescription,
  };
  console.log(task);
  event.target.reset();
}
