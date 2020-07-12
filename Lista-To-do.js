/*
// seleciona a tag body
const tagBody = document.querySelector("body");


// cria um input
const createInpt = document.createElement("input");
tagBody.appendChild(createInpt);
const input = document.querySelector("input");

// cria um botão
const createBtn = document.createElement("button");
tagBody.appendChild(createBtn);
const btn = document.querySelector("button");
btn.textContent = "enviar";

// cria a tag UL no doc
const createUl = document.createElement("ul");
// insere a tag UL dentro da tag body
tagBody.appendChild(createUl)

btn.onclick = () => {
    const adcNome = input.value;
    // insere um valor na ultima posição do vetor
    nomes.push(adcNome);    

    // cria a tag LI
    const createLi = document.createElement("li");

    // insere a tag LI dentro da tag UL
    createUl.appendChild(createLi);

        // pra cada nome no vetor cria um IL com o nome dentro
        for(let i = 0; i < nomes.length; i++){
        // seleciona todas as LI's
        const Li = document.querySelectorAll("li");
        const text = nomes[i];
        Li[i].textContent = text;
    }
}
const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const btnElement = document.querySelector("#app button");

let todos = JSON.parse(localStorage.getItem("list_todos")) || [];

btnElement.onclick = adcTodo; 
renderTodos();

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        const todoElement = document.createElement("li");
        const todoText = document.createTextNode(todo);

        listElement.appendChild(todoElement);
        todoElement.appendChild(todoText);

        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        const pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "delTodo(" + pos + ")");
        const linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(linkElement);
    }
}
function adcTodo(){
    const todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = ""; 
    renderTodos();
    saveStorage();
}
function delTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveStorage();
}
function saveStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos));
}
*/
