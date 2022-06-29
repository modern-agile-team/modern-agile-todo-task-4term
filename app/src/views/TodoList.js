"use strict"
let cnt = 0;
const ul = document.getElementById('ul_ID');
const todoInput = document.querySelector('.todo_input');
// const addBtn = document.querySelector('.btn_add')
//     .addEventListener('click', () => {
//         add(todoInput.value);
//         todoInput.value = "";
//     });
const addBtn = document.querySelector('.btn_add').addEventListener('click', parser);


const editToggle =  {
    완료 : "수정",
    수정 : "완료",
}


todoInput.addEventListener('keypress', (e) => {
    if (e.key ==="Enter"){
        add(todoInput.value);
        todoInput.value = "";
    }
});



function add(todoValue) {
    if (todoValue) {   
        // li만들고
        // li.innerHTML = `
        //     <li>안녕</li>
        //     <li>${todoValue}</li>
        // `; 
        // ul.appendChild(li);
    const text = document.createTextNode(todoValue),
        li = document.createElement("li"),
        div = document.createElement("div"),
        divText= document.createElement("div"),
        editBtn = document.createElement("button"),
        editBtnText = document.createTextNode("수정"),
        delBtn = document.createElement('button'),
        delBtnText = document.createTextNode('X'),
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
    delBtn.style.visibility= "hidden";
    editBtn.setAttribute("id", cnt);
    editBtn.setAttribute("class", "btn_edit");
    li.setAttribute("id", cnt);

    editBtn.addEventListener('click', (event) =>
        edit(event, editBtn.id, todoInput.value));
    div.addEventListener('click', (event) => line(event, div.id)); 
    delBtn.addEventListener('click', (event) => del(event, delBtn.id));
    input.addEventListener("click",(e) => {
        e.stopImmediatePropagation();
    });
    input.addEventListener('keypress', (event) => {
        if (event.key ==="Enter")
        enterEdit(event, todoInput.value, input.id, divText.style.textDecoration);
    });

    cnt++;
    
    // parser(todoValue, cnt);

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

function edit(event, id, value) {
    const input = document.querySelectorAll('.input_add'),
        div = document.querySelectorAll(".div_text"),
        editBtn = document.querySelectorAll(".btn_edit"),
        delBtn =  document.querySelectorAll(".btn_del");

    for (let i = 0; i < div.length; i++) {
        if (div[i].id === id && input[i].style.display === "none") {
            div[i].disabled = false;
            input[i].value = div[i].innerHTML;
            delBtn[i].style.visibility = "visible";
            div[i].style.display = "none";
            input[i].style.display = "block";
            editBtn[i].innerHTML = editToggle[editBtn[i].innerHTML];
            
        } else if (div[i].id === id && input[i].style.display === "block") {
            div[i].disabled = true;
            value = input[i].value;
            delBtn[i].style.visibility = "hidden";
            div[i].style.display = "block";
            input[i].style.display = "none";
            editBtn[i].innerHTML = editToggle[editBtn[i].innerHTML];
            div[i].innerHTML = input[i].value;
        }
    }
    event.stopPropagation();
}

function enterEdit(event, value, id){
    event.stopPropagation();
    const input = document.querySelectorAll('.input_add'),
        editBtn = document.querySelectorAll(".btn_edit"),
        div = document.querySelectorAll(".div_text"),
        delBtn =  document.querySelectorAll(".btn_del");

    for(let i = 0; i < input.length; i++){
        if (input[i].id === id){
            input[i].addEventListener("click",(evnet) => {
                event.stopPropagation();
            })
            value = input[i].value;
            delBtn[i].style.visibility = "hidden";
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
        if (div[i].id === id && div[i].style.textDecoration === ""){
            div[i].style.textDecoration = "line-through";
            div[i].style.color = "lightgrey";

        } else if (div[i].id === id && div[i].style.textDecoration == "line-through"){
            div[i].style.textDecoration = "";
            div[i].style.color = "black";
        }
    }
    event.stopPropagation();
}

function del(event, id) {
    const li = document.querySelectorAll("li");
    for (let i =0; i < li.length; i++){
        if (li[i].id === id){
            li.forEach((el) => {el === li[i] && el.remove()});
        }
    }
    event.stopPropagation();
}

function parser(e){
    const val = e.target.parentNode.childNodes[1].value;
    const req = {
        value: val,
        id: cnt,
    };
    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
    // .then((res) => res.json())
    //   .then(console.log)
    //   .catch((err) => {
    //     console.error(new Error("로그인 중 에러 발생"));

};

