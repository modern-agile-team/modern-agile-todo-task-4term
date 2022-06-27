const inputBox = document.querySelector(".todo-input");
const listEl = document.querySelector(".bottom");
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", e => {
  e.preventDefault();

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

  todoInputEl.addEventListener("click", () => {
    if (todoContentEl.style.textDecoration == "none") {
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
      todoEditEl.innerText = "완료"; // -> 객체로 할려면 여기 주석
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
