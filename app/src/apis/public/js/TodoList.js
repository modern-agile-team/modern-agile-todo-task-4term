"use strict";

import * as ToDoListFunction from "./functions.js";

const inputBox = document.querySelector("#inputContent"),
    addBtn = document.querySelector("#addBtn"),
    listBox = document.querySelector("#listBox");

let listCount = 0,
    isCheck = false;

const loadList = async () => {
    const listData = await ToDoListFunction.viewList();

    listData.forEach((data) => {
        createList(data.no, data.todo);
    });
};
loadList();

addBtn.addEventListener("click", () => {
    inputCheck();
});

inputBox.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        inputCheck();
    }
});

const createList = (no, todo) => {
    listCount = no;

    const list = document.createElement("li"),
        delBtn = document.createElement("button"), //삭제버튼
        todoContent = document.createElement("div"), //할 일 내용
        editContent = document.createElement("input"), //할 일 내용 (input태그)
        editBtn = document.createElement("button"); //수정버튼

    todoContent.innerText = todo;
    delBtn.innerText = "x";
    editBtn.innerText = "수정";

    list.classList.add("todoList");
    delBtn.classList.add("delBtn");
    todoContent.classList.add("todoContent");
    editContent.classList.add("todoContent");
    editBtn.classList.add("editBtn");

    editContent.type = "text";
    editContent.style.display = "none";

    listBox.appendChild(list);
    list.appendChild(delBtn);
    list.appendChild(todoContent);
    list.appendChild(editContent);
    list.appendChild(editBtn);

    if (listCount > 1) {
        list.style.borderTop = "1px solid #F1F3F5";
    }

    delBtn.addEventListener("click", () => {
        list.remove();
        ToDoListFunction.deleteList(no);
    });

    list.addEventListener("click", () => {
        if (editBtn.innerText === "수정")
            isCheck === false
                ? ((todoContent.style.textDecoration = "line-through"),
                  (isCheck = true))
                : ((todoContent.style.textDecoration = ""), (isCheck = false));
    });

    editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        editList(todoContent, editContent, no, editBtn);
    });

    editContent.addEventListener("keyup", (e) => {
        e.stopPropagation();
        if (e.keyCode === 13) {
            editList(todoContent, editContent, no, editBtn);
        }
    });

    inputBox.value = "";
};

// ------------------------------------------functions------------------------------------------

const editList = (content, input, no, btn) => {
    btn.innerText === "수정"
        ? editReady(content, input, btn)
        : editDone(content, input, no, btn);
};

const editReady = (content, input, btn) => {
    input.value = content.innerText;
    content.style.display = "none";
    input.style.display = "block";
    btn.innerText = "완료";
    content.style.backgroundColor = "#ffffff";
};

const editDone = (content, input, no, btn) => {
    content.style.display = "block";
    input.style.display = "none";
    content.innerText = input.value;
    content.style.backgroundColor = "";
    btn.innerText = "수정";
    ToDoListFunction.editList(input, isCheck, no);
};

const inputCheck = () => {
    if (!inputBox.value) {
        alert("내용을 입력해 주세요!");
        //빈 내용 입력 시 msg출력
    } else {
        ToDoListFunction.addList(inputBox, isCheck);
        createList(listCount + 1, inputBox.value);
    }
};
