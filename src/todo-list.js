/* TODO-LIST */

function safeTodoList() {
    const todoTextarea = document.getElementById('todo-textarea');
    const todoContent = todoTextarea.value;
  
    localStorage.setItem('todoList', todoContent);
  
    alert('Deine Todos wurden erfolgreich gespeichert!');
  }

  function loadTodoList() {
    const savedTodos = localStorage.getItem('todoList');
  
    if (savedTodos) {
      const todoTextarea = document.getElementById('todo-textarea');
      todoTextarea.value = savedTodos;
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadTodoList);

/* TEXTEREA */

  function adjustTextareaHeight(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("textarea").forEach((textarea) => {
      adjustTextareaHeight(textarea);
  
      textarea.addEventListener("input", () => adjustTextareaHeight(textarea));
    });
  });
  
  document.addEventListener("input", (event) => {
    if (event.target.tagName.toLowerCase() === "textarea") {
      autoResizeTextarea(event.target);
    }
  });