/** @format */

let inputBox = document.getElementById("addTextDiv");
let addToDo = document.getElementById("add");
let toDoList = document.getElementById("todolistBox");
let list_count = 0;
addToDo.addEventListener("click", function () {
    list_count++;
    let list = document.createElement("li");
    list.classList.add("todoList");

    if (list_count > 1) {
        list.style.borderTop = "1px solid #F1F3F5";
    }
    // 할 일 목록 2개부터 구분선 추가

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
    //수정칸 숨김
    if (!inputBox.value) alert("내용을 입력해 주세요!");
    //빈 내용 입력 시 msg출력
    else {
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
                todolistText.style.display = "none"; // 홀수 번째 클릭 시 할 일 리스트 숨김
                editText.style.display = "block"; // 홀수 번째 클릭 시 수정창 숨김해제
                editBtn.innerText = "완료"; //수정버튼 수정 -> 완료  텍스트 변환
                todolistText.style.backgroundColor = "#ffffff"; //수정중에 수정 창 배경 색 변환
            } else {
                todolistText.style.display = "block"; // 짝수 번째 클릭 시 할 일 리스트 숨김해제
                editText.style.display = "none"; // 짝수 번째 클릭 시 수정창 숨김
                todolistText.innerText = editText.value; //할 일 리스트에 수정 값 입력
                editBtn.innerText = "수정"; // 수정버튼 완료 -> 수정 텍스트 변환
                todolistText.style.backgroundColor = "";
            }
        });
    }
});
