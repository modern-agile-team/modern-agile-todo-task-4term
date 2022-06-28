const addBtn = document.querySelector('.btn_add').addEventListener('click', () => {add(todoInput.value);
todoInput.value = "";});
const ul = document.getElementById('ul_ID');
const todoInput = document.querySelector('.todo_input');
const editToggle =  {
    완료 : "수정",
    수정 : "완료"
}

let cnt = 0;

todoInput.addEventListener('keypress', (e) => {
    if (e.key ==="Enter"){
        add(todoInput.value);
        todoInput.value = "";
    }
});


function add(tod) {

    if (tod) {    
    const text = document.createTextNode(todoInput.value);

    const li = document.createElement("li");
    const div = document.createElement("div");
    const divText= document.createElement("div");
    const editBtn = document.createElement("button");
    const editBtnText = document.createTextNode("수정");
    const delBtn = document.createElement('button');
    const delBtnText = document.createTextNode('X');
    const input = document.createElement("input")

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

    editBtn.addEventListener('click', (event) => edit(event, editBtn.id, todoInput.value));
    div.addEventListener('click', (event) => line(event, div.id));
    delBtn.addEventListener('click', (event) => del(event, delBtn.id));
    input.addEventListener('keypress', (event) => {
        if (event.key ==="Enter")
        enterEdit(event, todoInput.value, input.id, divText.style.textDecoration);
    });

    cnt++;

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
    const input = document.querySelectorAll('.input_add');
    const div = document.querySelectorAll(".div_text");
    const editBtn = document.querySelectorAll(".btn_edit");
    const delBtn =  document.querySelectorAll(".btn_del");

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
    const input = document.querySelectorAll('.input_add');
    const editBtn = document.querySelectorAll(".btn_edit");
    const div = document.querySelectorAll(".div_text");
    const delBtn =  document.querySelectorAll(".btn_del");

    for(let i = 0; i < input.length; i++){
        if (input[i].id === id){
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

        }else if (div[i].id === id && div[i].style.textDecoration == "line-through"){
            div[i].style.textDecoration = "";
            div[i].style.color = "black";
        }
    }
    event.stopPropagation();

}

function del(event, id) {
     li = document.querySelectorAll("li");
    for (let i =0; i < li.length; i++){
        if (li[i].id === id){
            li.forEach((el) => {el === li[i] && el.remove()});
            
        }
    }
    event.stopPropagation();
}


