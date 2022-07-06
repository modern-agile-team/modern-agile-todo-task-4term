const todoInputElem = document.querySelector(".todo-input");
const todoListElem = document.querySelector(".todo-list");
const todoAddBtn = document.querySelector(".add-btn");

let todos = [];
let id = 1;
let isClickedRevice = [];

const setClickedInfo = (todos) => {
  isClickedRevice = [];
  todos.forEach((todo) => {
    isClickedRevice.push({ id: todo.id, active: false });
  });
};

function insertDatabase({ description, is_check }) {
  fetch(`/${description}/${is_check}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log("create 정상 실행");
      }
    })
    .catch((err) => {
      console.error("post 중 에러 발생");
    });
}

function getDatabase() {
  fetch("/readDB", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        todos = res;
        setClickedInfo(todos);
      }
    })
    .then(() => {
      paintTodos();
    })
    .catch((err) => {
      console.error("get 중 에러 발생");
    });
}

function removeDatabase({ id }) {
  fetch(`/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log("delete 정상 실행");
      }
    })
    .catch((err) => {
      console.error("delete 중 에러 발생");
    });
}

function updateDatabase({ description, id, is_check }) {
  fetch(`/${id}/${description}/${is_check}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        console.log("patch 정상 실행");
      }
    })
    .catch((err) => {
      console.error("patch 중 에러 발생");
    });
}

const setTodos = (newTodos, newClickedInfo) => {
  todos = newTodos;
  isClickedRevice = newClickedInfo;
};

const getAllTodos = () => {
  return [todos, isClickedRevice];
};

const appendTodos = (text) => {
  const newId = id++;
  insertDatabase({ id: newId, is_check: 0, description: text });
  getDatabase();
  paintTodos();
};

const deleteTodo = (todoId) => {
  removeDatabase({ id: todoId });
  getDatabase();
  paintTodos();
};

const completeTodo = (todoId) => {
  const todo = todos.filter((todo) => todo.id === todoId);
  todo[0].is_check = todo[0].is_check === 0 ? 1 : 0;
  updateDatabase(todo[0]);
  getDatabase();
  paintTodos();
};

const onClickReviceTodo = (e, todoId) => {
  const newClickedInfo = getAllTodos()[1].map((clickedInfo) =>
    clickedInfo.id === todoId
      ? { ...clickedInfo, active: !clickedInfo.active }
      : clickedInfo
  );
  setTodos(todos, newClickedInfo);
  paintTodos();
};

const updateTodo = (text, todoId) => {
  const todo = todos.filter((todo) => (todo.id = todoId));
  todo[0].description = text;
  updateDatabase(todo[0]);
  getDatabase();
  paintTodos();
};

const paintTodos = () => {
  todoListElem.innerHTML = null;
  const allTodos = getAllTodos()[0];
  const isClickedRevice = getAllTodos()[1];

  allTodos.forEach((todo) => {
    const reviceBtnElem = document.createElement("button");
    reviceBtnElem.classList.add("reviceBtn");
    reviceBtnElem.addEventListener("click", (event) => {
      event.stopPropagation();
      onClickReviceTodo(event, todo.id);
    });
    reviceBtnElem.innerHTML = "수정";

    const todoItemElem = document.createElement("li");
    todoItemElem.classList.add("todo-item");
    todoItemElem.addEventListener("click", () => {
      completeTodo(todo.id);
    });

    const delBtnElem = document.createElement("button");
    delBtnElem.classList.add("delBtn");
    delBtnElem.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteTodo(todo.id);
    });
    delBtnElem.innerHTML = "X";

    let todoElem = document.createElement("div");
    todoElem.classList.add("todo");
    todoElem.innerText = todo.description;

    if (
      isClickedRevice.filter((clickInfo) => clickInfo.id === todo.id)[0].active
    ) {
      reviceBtnElem.innerHTML = "완료";
      todoElem = document.createElement("input");
      todoElem.classList.add("todo");
      todoElem.classList.add("moddable");
      todoElem.value = todo.description;

      todoElem.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        reviceBtnElem.addEventListener("click", (event) => {
          updateTodo(event.target.parentNode.childNodes[1].value, todo.id);
        });
      });
    }

    if (todo.is_check) {
      todoItemElem.classList.add("checked");
    }

    todoItemElem.appendChild(delBtnElem);
    todoItemElem.appendChild(todoElem);
    todoItemElem.appendChild(reviceBtnElem);
    todoListElem.appendChild(todoItemElem);
  });
};

getDatabase();
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
