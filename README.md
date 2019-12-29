# To_Do_List

1. At first there is an array of different tasks
2. Use an Immediately Invoked Function Expression. It is used because of safety, to hide our variables:
 -transform our array of tasks into new object with key = _id and value = array[i]
 -create an object of different themes for our page
 -get last selected page theme via localstorage
 -choose DOM-elements which we will work with
3. Create function renderAllTasks(taskList) to draw task list 
4. Create function listItemTemplate({ _id, title, body } = {}) which draw li-item with one task
5. Create function onFormSubmitHandler(e) which submit form-element
6. Create function createNewTask(title, body) which creates new task
7. Create function deleteTask(id) which removes task-item from object of tasks
8. Create function deleteTaskFromHtml(confirmed, el) which removes task-item from ul-list after confirmation 
9. Create function onDeleteHandler({ target }) which removes task-item from ul-list
10. Create function onThemeSelectHandler(e) which changes theme of page
11. Create function setTheme(name) which sets theme of page
