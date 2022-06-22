const todoInputElem = document.querySelector(".todo-input");
const todoListElem = document.querySelector(".todo-list");
const todoAddBtn = document.querySelector(".add-btn");

let todos = [];
let id = 0;

const setTodos = (newTodos) => {
  todos = newTodos;
};

const getAllTodos = () => {
  return todos;
};

const appendTodos = (text) => {
  const newId = id++;
  const newTodos = [
    ...getAllTodos(),
    { id: newId, is_check: false, description: text, is_clikedRevice: false },
  ];
  setTodos(newTodos);
  paintTodos();
};

const deleteTodo = (todoId) => {
  const newTodos = getAllTodos().filter((todo) => todo.id !== todoId);
  setTodos(newTodos);
  paintTodos();
};

const completeTodo = (todoId) => {
  const newTodos = getAllTodos().map((todo) =>
    todo.id === todoId ? { ...todo, is_check: !todo.is_check } : todo
  );
  setTodos(newTodos);
  paintTodos();
};

const onClickReviceTodo = (e, todoId) => {
  const newTodos = getAllTodos().map((todo) =>
    todo.id === todoId
      ? { ...todo, is_clikedRevice: !todo.is_clikedRevice }
      : todo
  );
  setTodos(newTodos);
  paintTodos();
};

const updateTodo = (text, todoId) => {
  const newTodos = getAllTodos().map((todo) =>
    todo.id === todoId ? { ...todo, description: text } : todo
  );
  setTodos(newTodos);
  paintTodos();
};

const paintTodos = () => {
  todoListElem.innerHTML = null;
  const allTodos = getAllTodos();

  allTodos.forEach((todo) => {
    const reviceBtnElem = document.createElement("button");
    reviceBtnElem.classList.add("reviceBtn");
    reviceBtnElem.addEventListener("click", (event) =>
      onClickReviceTodo(event, todo.id)
    );
    reviceBtnElem.innerHTML = "수정";

    const todoItemElem = document.createElement("li");
    todoItemElem.classList.add("todo-item");
    todoItemElem.addEventListener("click", () => completeTodo(todo.id));

    const delBtnElem = document.createElement("button");
    delBtnElem.classList.add("delBtn");
    delBtnElem.addEventListener("click", () => deleteTodo(todo.id));
    delBtnElem.innerHTML = "X";

    const todoElem = document.createElement("input");
    todoElem.classList.add("todo");
    todoElem.value = todo.description;
    todoElem.disabled = true;

    if (todo.is_check) {
      todoItemElem.classList.add("checked");
    }
    if (todo.is_clikedRevice) {
      reviceBtnElem.innerHTML = "완료";
      todoElem.classList.add("moddable");
      todoElem.disabled = false;
      todoElem.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        reviceBtnElem.addEventListener("click", (event) => {
          updateTodo(event.target.parentNode.childNodes[1].value, todo.id);
        });
      });
    }

    todoItemElem.appendChild(delBtnElem);
    todoItemElem.appendChild(todoElem);
    todoItemElem.appendChild(reviceBtnElem);
    todoListElem.appendChild(todoItemElem);
  });
};

const init = () => {
  todoInputElem.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.target.value) {
      appendTodos(e.target.value);
      todoInputElem.value = "";
    }
  });
  todoAddBtn.addEventListener("click", () => {
    if (todoInputElem.value) {
      appendTodos(todoInputElem.value);
      todoInputElem.value = "";
    }
  });
};

init();
