/** @format */

let inputBox = document.getElementById("addTextDiv");
let addToDo = document.getElementById("add");
let toDoList = document.getElementById("todolistBox");

addToDo.addEventListener("click", function () {
    let list = document.createElement("li");
    list.classList.add("todoList");

    let xBtn = document.createElement("button"); //삭제버튼
    let todolistText = document.createElement("div"); //할 일 내용
    let editBtn = document.createElement("button"); //수정버튼
    let editText = document.createElement("input"); //할 일 내용 (input태그)

    xBtn.classList.add("xBtn");
    todolistText.classList.add("todolistText");
    editBtn.classList.add("editBtn");
    editText.classList.add("todolistText");
    //class 삽입

    xBtn.innerText = "x";
    editBtn.innerText = "수정";
    //button에 내용 삽입

    editText.type = "text";
    //할 일 내용(input)을 type = 'text'로 변경

    editText.style.display = "none";
    if (!inputBox.value) alert("내용을 입력해 주세요!");
    else {
        list.id = "todolistBox";
        todolistText.innerText = inputBox.value;
        editText.value = inputBox.value;
        toDoList.appendChild(list);
        inputBox.value = "";

        list.appendChild(xBtn);
        list.appendChild(todolistText);
        list.appendChild(editText);
        list.appendChild(editBtn);
        //각 요소들을 큰 박스의 자식요소로 변경
        //list박스에 집어 넣어 한 세트로 인식

        todolistText.addEventListener("click", function () {
            todolistText.style.textDecoration = "line-through";
            // 할 일 목록 클릭 시 취소선 삽입
        });
        xBtn.addEventListener("click", function () {
            list.remove();
            //삭제 버튼 클릭 시 삭제
        });

        let count = 0;
        //수정 버튼 클릭 횟수

        editBtn.addEventListener("click", function () {
            count++;
            if (count % 2 === 1) {
                todolistText.style.display = "none";
                editText.style.display = "block";
                console.log(todolistText.style.cssText);

                editBtn.innerText = "완료";
                todolistText.style.backgroundColor = "#ffffff";
            } else {
                todolistText.style.display = "block";
                editText.style.display = "none";
                todolistText.innerText = editText.value;
                editBtn.innerText = "수정";
                todolistText.style.backgroundColor = "";
            }
        });
    }
});
