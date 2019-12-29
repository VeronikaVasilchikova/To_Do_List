window.addEventListener("DOMContentLoaded", function() {

  // Array of different tasks
  const tasks = [
    {
      _id: '5d2ca9e2e03d40b326596aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095c1288e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
    {
      _id: '5d2ca9e2e03d40b3232496aa7',
      completed: true,
      body:
        'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
      title: 'Eu ea incididunt sunt consectetur fugiat non.',
    },
    {
      _id: '5d2ca9e29c8a94095564788e0',
      completed: false,
      body:
        'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
      title:
        'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
    },
  ];

  // Immediately Invoked Function Expression. It is used because of safety. We want to hide our variables
  (function(arrOfTasks) {
    // transform our array of tasks into new object with key = _id and value = array[i]
    const objOfTasks = arrOfTasks.reduce((acc, task) => {
      acc[task._id] = task;
      return acc;
    }, {});

    // create an object of different themes
    const themes = {
      default: {
        '--base-text-color': '#212529',
        '--header-bg': '#007bff',
        '--header-text-color': '#fff',
        '--default-btn-bg': '#007bff',
        '--default-btn-text-color': '#fff',
        '--default-btn-hover-bg': '#0069d9',
        '--default-btn-border-color': '#0069d9',
        '--danger-btn-bg': '#dc3545',
        '--danger-btn-text-color': '#fff',
        '--danger-btn-hover-bg': '#bd2130',
        '--danger-btn-border-color': '#dc3545',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#80bdff',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      },
      dark: {
        '--base-text-color': '#212529',
        '--header-bg': '#343a40',
        '--header-text-color': '#fff',
        '--default-btn-bg': '#58616b',
        '--default-btn-text-color': '#fff',
        '--default-btn-hover-bg': '#292d31',
        '--default-btn-border-color': '#343a40',
        '--default-btn-focus-box-shadow':
          '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        '--danger-btn-bg': '#b52d3a',
        '--danger-btn-text-color': '#fff',
        '--danger-btn-hover-bg': '#88222c',
        '--danger-btn-border-color': '#88222c',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#78818a',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      },
      light: {
        '--base-text-color': '#212529',
        '--header-bg': '#fff',
        '--header-text-color': '#212529',
        '--default-btn-bg': '#fff',
        '--default-btn-text-color': '#212529',
        '--default-btn-hover-bg': '#e8e7e7',
        '--default-btn-border-color': '#343a40',
        '--default-btn-focus-box-shadow':
          '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
        '--danger-btn-bg': '#f1b5bb',
        '--danger-btn-text-color': '#212529',
        '--danger-btn-hover-bg': '#ef808a',
        '--danger-btn-border-color': '#e2818a',
        '--input-border-color': '#ced4da',
        '--input-bg-color': '#fff',
        '--input-text-color': '#495057',
        '--input-focus-bg-color': '#fff',
        '--input-focus-text-color': '#495057',
        '--input-focus-border-color': '#78818a',
        '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      },
    };

    // get last selected theme via localstorage
    let lastSelectedTheme = localStorage.getItem('current_theme') || 'default';

    // choose DOM-elements
    //choose tag ul
    const listContainer = document.querySelector('.tasks-list-section .list-group');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];
    const themeSelect = document.getElementById('themeSelect');

    // set last theme
    setTheme(lastSelectedTheme);

    // draw the array of tasks in our page
    renderAllTasks(objOfTasks);

    // add submit-event to the form-element
    form.addEventListener('submit', onFormSubmitHandler);

    // add click-event to ul-element to delete chosen li-item
    listContainer.addEventListener('click', onDeleteHandler);

    //choose a theme of our page
    themeSelect.addEventListener('change', onThemeSelectHandler);

    //create a function to draw task list
    function renderAllTasks(taskList) {
      if(!taskList) {
        alert('Error! Give a task list');
        return;
      }
      const fragment = document.createDocumentFragment();

      // return an array of object properties
      Object.values(taskList).forEach(task => {
        const li = listItemTemplate(task);
        fragment.appendChild(li);
      });
      listContainer.appendChild(fragment);
    }

    // create a function which draw li-item with one task
    function listItemTemplate({ _id, title, body } = {}) {
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');
      li.setAttribute('data-task-id', _id);

      const span = document.createElement('span');
      span.textContent = title;
      span.style.fontWeight = 'bold';

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete task';
      deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');

      const article = document.createElement('p');
      article.textContent = body;
      article.classList.add('mt-1', 'w-100');

      li.appendChild(span);
      li.appendChild(deleteBtn);
      li.appendChild(article);

      return li;
    }

    // create a function which submit form-element
    function onFormSubmitHandler(e) {
      e.preventDefault();
      const titleValue = inputTitle.value;
      const bodyValue = inputBody.value;
      
      // check whether filled in inputs-fields
      if(!titleValue || !bodyValue) {
        alert('Please, input title and body');
        return;
      }

      // create new task with data from form-elements
      const task = createNewTask(titleValue, bodyValue);
      const listItem = listItemTemplate(task);
      listContainer.insertAdjacentElement('afterbegin', listItem);
      form.reset();
    }

    // create a function which creates new task
    function createNewTask(title, body) {
      const newTask = {
        title,
        body,
        completed: false,
        _id: `task-${Math.random()}`,
      }

      objOfTasks[newTask._id] = newTask;

      return { ...newTask };
    }

    // create a function which removes task-item from object of tasks
    function deleteTask(id) {
      const { title } = objOfTasks[id];
      const isConfirm = confirm(`Are you sure you want to delete the task with title ${title}?`);
      if(!isConfirm) return isConfirm;
      delete objOfTasks[id];
      return isConfirm;
    }

    // create a function which removes task-item from ul-list after confirmation   
    function deleteTaskFromHtml(confirmed, el) {
      if(!confirmed) return;
      el.remove();
    }

    // create a function which removes task-item from ul-list
    function onDeleteHandler({ target }) {
      if(target.classList.contains('delete-btn')) {
        const parent = target.closest('[data-task-id]');
        const id = parent.dataset.taskId;
        const confirmed = deleteTask(id);
        deleteTaskFromHtml(confirmed, parent);
      }
    }

    // create a function which changes theme of page
    function onThemeSelectHandler(e) {
      const selectedTheme = themeSelect.value;
      const isConfirm = confirm(`Are you sure you want to change current theme to ${selectedTheme}?`);
      if(!isConfirm) {
        themeSelect.value = lastSelectedTheme;
        return;
      }
      setTheme(selectedTheme);
      lastSelectedTheme = themeSelect.value;
      localStorage.setItem('current_theme', selectedTheme);
    }

    // create a function which sets theme of page
    function setTheme(name) {
      const selectedThemeObj = themes[name];
      Object.entries(selectedThemeObj).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
   
  })(tasks);
});