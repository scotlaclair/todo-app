document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
<<<<<<< HEAD
    const emptyState = document.getElementById('todo-empty-state');

    // Update empty state visibility
    // Note: checking children of the <ul> element only, not its sibling <p> empty state element
    function updateEmptyState() {
        if (todoList.children.length === 0) {
            emptyState.removeAttribute('hidden');
        } else {
            emptyState.setAttribute('hidden', '');
        }
    }
=======
    const themeToggle = document.getElementById('theme-toggle');

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
>>>>>>> 4431b04 (Implement theme toggle functionality and enhance styling for dark mode)

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
            // Prevent multiple delete actions from being scheduled
            deleteBtn.disabled = true;
            li.classList.add('removing');
            setTimeout(() => {
                // Guard against removing an already-detached element
                if (li.parentNode === todoList) {
                    todoList.removeChild(li);
                    updateEmptyState();
                }
            }, 400);
        });

        todoList.appendChild(li);
        todoInput.value = '';
        updateEmptyState();
    }

    // Initialize empty state
    updateEmptyState();
});