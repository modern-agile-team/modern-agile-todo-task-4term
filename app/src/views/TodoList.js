window.addEventListener("load", () => {
  const div = document.querySelector(".middle");
  const input = document.querySelector(".todo-input");
  const list_el = document.querySelector(".bottom");
  const add = document.querySelector(".add");

  add.addEventListener("click", e => {
    e.preventDefault();

    const bottom_box = input.value;

    // if (!bottom_box) {
    //   alert("please");
    //   return;
    // }

    // 입력
    const task_el = document.createElement("li");
    task_el.classList.add("bottom_box");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("bottom");

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text2");
    task_input_el.type = "text2";
    task_input_el.value = bottom_box;
    task_input_el.setAttribute("readonly", "redonly");

    task_content_el.appendChild(task_input_el);

    // 버튼 가져오기
    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delBtn");
    task_delete_el.innerHTML = "X";

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("changeBtn");
    task_edit_el.innerHTML = "수정";

    task_el.appendChild(task_delete_el);
    task_el.appendChild(task_content_el);
    task_el.appendChild(task_edit_el);

    list_el.appendChild(task_el);

    input.value = "";

    // list_el.addEventListener("click", () => {
    //   task_content_el.style.textDecoration = "line-through";
    //   task_content_el.color = "lightgray";
    //});
    // const editTextChang = {
    //   완료: "수정",
    //   수정: "완료",

    // };
    task_edit_el.addEventListener("click", () => {
      // task_edit_el.innerText = editTextChang[task_edit_el.innerText];
      //console.log(task_edit_el.innerText);
      if (task_edit_el.innerText === "수정") {
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        task_edit_el.innerText = "완료"; // -> 객체로 할려면 여기 주석
      } else {
        // console.log("성공");
        task_input_el.setAttribute("readonly", "readonly");
        task_edit_el.innerText = "수정";
      }
    });
    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });
  });
});
