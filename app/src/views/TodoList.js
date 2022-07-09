const inputBox = document.querySelector(".todo-input");
const listEl = document.querySelector(".bottom");
const addBtn = document.querySelector(".middle");

// 제가 하는 방
// 먼저 get 요청 >> 이미 DB에 있는 Lists
// todoInfo 배열에 받은 List 저장
// ul.appendchild(todoIfo)

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
addBtn.addEventListener("submit", e => {
  e.preventDefault();

  // function createDb({ description, is_check }) {
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

  createDb();

  function updateDb(value) {
    const req = {
      description: inputBox.value,
      is_check: 0,
      id: id,
    };

    console.log(inputBox.value);

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

  // function deleteDb({ id }) {
  //   fetch(`/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(req),
  //   })
  //     .then(res => res.json())
  //     .then(res => (todoInfo = res));
  // }
  // deleteDb();

  const bottom_box = inputBox.value;

  const todoEl = document.createElement("li");
  const todoContentEl = document.createElement("div");
  const todoInputEl = document.createElement("input");

  if (!bottom_box) {
    return;
  } else {
    todoEl.classList.add("bottom_box");
    todoContentEl.classList.add("bottom");
    todoInputEl.classList.add("inputText");
    todoInputEl.type = "inputText";
    todoInputEl.value = bottom_box;
    todoInputEl.setAttribute("readonly", "redonly");
    todoContentEl.appendChild(todoInputEl);
  }

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
    // event.stopPropagation();
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
    console.log("버튼 실행");
    if (todoEditEl.innerText === "수정") {
      todoInputEl.removeAttribute("readonly");
      todoInputEl.style.backgroundColor = "white";
      todoInputEl.focus();
      todoEditEl.innerText = "완료"; // -> 객체로 할려면 여기 주석
      updateDb();
    } else {
      todoInputEl.setAttribute("readonly", "readonly");
      todoInputEl.style.backgroundColor = "";
      todoEditEl.innerText = "수정";
    }
  });

  todoDeleteEl.addEventListener("click", () => {
    listEl.removeChild(todoEl);
  });
});

function loadAllTodos() {
  todoInfo.forEach(todo => {
    const bottom_box = todo.description;
    const todoEl = document.createElement("li");
    const todoContentEl = document.createElement("div");
    const todoInputEl = document.createElement("input");

    todoEl.classList.add("bottom_box");
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
      // console.log("버튼 실행");
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
    });
  });
}

readDb();
// loadAllTodos();
