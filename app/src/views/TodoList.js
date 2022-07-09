"use strict";

let cnt = 0;
const ul = document.getElementById("ul_ID");
const todoInput = document.querySelector(".todo_input");
const addBtn = document
  .querySelector(".btn_add")
  .addEventListener("click", () => {
    addParse(todoInput.value, cnt);
    todoInput.value = "";
  });

function load() {
  fetch("/load", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res) {
        for (let i = 0; i < res.length; i++) {
          add(res[i].description, res[i].id, res[i].is_check);
        }
        cnt = res.slice(-1)[0].id + 1;
      }
    })
    .catch((err) => console.log(err));
}

load();

const editToggle = {
  완료: "수정",
  수정: "완료",
};

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addParse(todoInput.value, cnt);
    todoInput.value = "";
  }
});

function setCnt(newCnt) {
  cnt = newCnt;
}

function add(todoValue, cnt, is_check) {
  console.log(is_check);
  if (todoValue) {
    const text = document.createTextNode(todoValue),
      li = document.createElement("li"),
      div = document.createElement("div"),
      divText = document.createElement("div"),
      editBtn = document.createElement("button"),
      editBtnText = document.createTextNode("수정"),
      delBtn = document.createElement("button"),
      delBtnText = document.createTextNode("X"),
      input = document.createElement("input");

    input.setAttribute("id", cnt);
    input.setAttribute("class", "input_add");
    input.style.display = "none";
    divText.setAttribute("id", cnt);
    divText.setAttribute("class", "div_text");
    div.setAttribute("id", cnt);
    div.setAttribute("class", "div_add");
    delBtn.setAttribute("id", cnt);
    delBtn.setAttribute("class", "btn_del");
    editBtn.setAttribute("id", cnt);
    editBtn.setAttribute("class", "btn_edit");
    li.setAttribute("id", cnt);

    if (is_check == 1) {
      divText.style.textDecoration = "line-through";
      divText.style.color = "lightgrey";
    }

    editBtn.addEventListener("click", (event) =>
      edit(event, editBtn.id, todoInput.value)
    );
    div.addEventListener("click", (event) => line(event, div.id));
    delBtn.addEventListener("click", (event) => del(event, delBtn.id));
    input.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
    });
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") enterEdit(event, input.id);
    });

    delBtn.appendChild(delBtnText);
    editBtn.appendChild(editBtnText);
    divText.appendChild(text);
    div.appendChild(delBtn);
    div.appendChild(input);
    div.appendChild(divText);
    div.appendChild(editBtn);
    li.appendChild(div);
    ul.appendChild(li);
  }
}

function addParse(todoValue, cnt) {
  parser(todoValue, cnt);
  add(todoValue, cnt);
  setCnt(++cnt);
}

function edit(event, id, value) {
  const input = document.querySelectorAll(".input_add"),
    div = document.querySelectorAll(".div_text"),
    editBtn = document.querySelectorAll(".btn_edit"),
    delBtn = document.querySelectorAll(".btn_del");

  for (let i = 0; i < div.length; i++) {
    if (div[i].id === id && input[i].style.display === "none") {
      //수정
      div[i].disabled = false;
      input[i].value = div[i].innerHTML;
      div[i].style.display = "none";
      input[i].style.display = "block";
      editBtn[i].innerHTML = editToggle[editBtn[i].innerHTML];
    } else if (div[i].id === id && input[i].style.display === "block") {
      //완료
      div[i].disabled = true;
      value = input[i].value;

      if (div[i].style.textDecoration === "line-through") {
        update(value, input[i].id, 1);
      } else update(value, input[i].id, 0);

      div[i].style.display = "block";
      input[i].style.display = "none";
      editBtn[i].innerHTML = editToggle[editBtn[i].innerHTML];
      div[i].innerHTML = input[i].value;
    }
  }
  event.stopPropagation();
}

function enterEdit(event, id) {
  event.stopPropagation();
  const input = document.querySelectorAll(".input_add"),
    editBtn = document.querySelectorAll(".btn_edit"),
    div = document.querySelectorAll(".div_text"),
    delBtn = document.querySelectorAll(".btn_del");

  for (let i = 0; i < input.length; i++) {
    if (input[i].id === id) {
      input[i].addEventListener("click", (evnet) => {
        event.stopPropagation();
      });
      value = input[i].value;
      div[i].style.display = "block";
      input[i].style.display = "none";
      editBtn[i].innerHTML = editToggle[editBtn[i].innerHTML];
      div[i].innerHTML = input[i].value;
      div[i].style.textDecoration = div[i].style.textDecoration;
    }
  }
}

function line(event, id) {
  const div = document.querySelectorAll(".div_text");

  for (let i = 0; i < div.length; i++) {
    if (div[i].id === id && div[i].style.textDecoration === "") {
      div[i].style.textDecoration = "line-through";
      div[i].style.color = "lightgrey";
      lineUpDate(id, 1);
    } else if (
      div[i].id === id &&
      div[i].style.textDecoration == "line-through"
    ) {
      div[i].style.textDecoration = "";
      div[i].style.color = "black";
      lineUpDate(id, 0);
    }
  }
  event.stopPropagation();
}

function del(event, id) {
  const li = document.querySelectorAll("li");

  for (let i = 0; i < li.length; i++) {
    if (li[i].id === id) {
      li.forEach((el) => {
        el === li[i] && el.remove();
      });

      const req = {
        id: li[i].id,
      };
      fetch("/del", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });
    }
  }
  event.stopPropagation();
}

function parser(val, cnt) {
  const req = {
    value: val,
    id: cnt,
  };
  fetch("/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}

function update(val, id, check) {
  const req = {
    value: val,
    id: id,
    state: check,
  };
  fetch("/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
function lineUpDate(id, check) {
  const req = {
    id: id,
    state: check,
  };
  fetch("/lineUpdate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
