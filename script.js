document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="complete-checkbox">
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;

        const checkbox = li.querySelector('.complete-checkbox');
        const span = li.querySelector('span');
        const deleteBtn = li.querySelector('.delete-btn');

        checkbox.addEventListener('change', function() {
            span.classList.toggle('completed');
        });

        deleteBtn.addEventListener('click', function() {
            li.classList.add('removing');
            setTimeout(() => {
                todoList.removeChild(li);
            }, 400);
        });

        todoList.appendChild(li);
        todoInput.value = '';
    }
});