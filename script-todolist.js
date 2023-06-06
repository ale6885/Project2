  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');
  const todoButton = document.getElementById('todo-button');

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const todoText = todoInput.value.trim(); 

    if (todoText !== '') {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = todoText; 

      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete'; 

      buttonDelete.addEventListener('click', function() {
        li.remove(); 
      });

      li.appendChild(span);
      li.appendChild(buttonDelete);

      todoList.appendChild(li);

      todoInput.value = '';
    }
  });

  todoButton.addEventListener('click', function(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText !== '') {
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = todoText;

      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'Delete';

      buttonDelete.addEventListener('click', function() {
        li.remove();
      });

      li.appendChild(span);
      li.appendChild(buttonDelete);

      todoList.appendChild(li);

      todoInput.value = '';
    }
  });
