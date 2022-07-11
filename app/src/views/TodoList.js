const inputBox = document.querySelector(".todo-input");
const listEl = document.querySelector(".bottom");
const addBtn = document.querySelector(".middle");

let todoInfo = [];
let id = 0;

function readDb() {
  fetch("/readDB", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(res => {
      todoInfo = res;
    })
    .then(() => {
      loadAllTodos();
    });
}

function createDb() {
  const req = {
    description: inputBox.value,
    is_check: 0,
  };

  // fetch(`/${description}/${is_check}`, {
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then(res => res.json())
    .then(res => (todoInfo = res));
}

function updateDb() {
  const req = {
    description: inputBox.value,
    is_check: 0,
    id: todo.id,
  };

  // console.log(inputBox.value);

  fetch("/", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  // .then(res => res.json())
  // .then(res => (todoInfo = res));
}

function deleteDb(id) {
  fetch(`${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    // .then(res => res.json())
    .then(res => console.log(res))
    .then(res => (todoInfo = res));
}

function loadAllTodos() {
  todoInfo.forEach(todo => {
    const bottom_box = todo.description;
    const todoEl = document.createElement("li");
    const todoContentEl = document.createElement("div");
    const todoInputEl = document.createElement("input");

    todoEl.classList.add("bottom_box");
    todoEl.id = todo.id;
    todoContentEl.classList.add("bottom");
    todoInputEl.classList.add("inputText");
    todoInputEl.type = "inputText";
    todoInputEl.value = bottom_box;
    todoInputEl.setAttribute("readonly", "redonly");
    todoContentEl.appendChild(todoInputEl);

    // 버튼 가져오기
    const todoDeleteEl = document.createElement("button");
    todoDeleteEl.classList.add("delBtn");
    todoDeleteEl.innerHTML = "X";

    const todoEditEl = document.createElement("button");
    todoEditEl.classList.add("changeBtn");
    todoEditEl.innerHTML = "수정";

    todoEl.appendChild(todoDeleteEl);
    todoEl.appendChild(todoContentEl);
    todoEl.appendChild(todoEditEl);

    listEl.appendChild(todoEl);

    inputBox.value = "";

    todoInputEl.addEventListener("click", event => {
      event.stopImmediatePropagation();
      if (
        todoContentEl.style.textDecoration === "none" ||
        todoContentEl.style.textDecoration === ""
      ) {
        todoContentEl.style.textDecoration = "line-through";
        todoInputEl.style.color = "lightgray";
        todoContentEl.style.color = "lightgray";
      } else {
        todoContentEl.style.textDecoration = "none";
        todoInputEl.style.color = "#606060";
      }
    });

    todoEditEl.addEventListener("click", () => {
      if (todoEditEl.innerText === "수정") {
        todoInputEl.removeAttribute("readonly");
        todoInputEl.style.backgroundColor = "white";
        todoInputEl.focus();
        todoEditEl.innerText = "완료";
      } else {
        todoInputEl.setAttribute("readonly", "readonly");
        todoInputEl.style.backgroundColor = "";
        todoEditEl.innerText = "수정";
      }
    });

    todoDeleteEl.addEventListener("click", () => {
      listEl.removeChild(todoEl);
      deleteDb();
      console.log(todoInfo);
    });
  });
}

addBtn.addEventListener("submit", e => {
  // e.preventDefault();

  createDb();
  readDb();
  console.log(555555, todoInfo);
});

// deleteBtn.addEventListener("")

readDb();
