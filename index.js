const input = document.getElementById("choose")
const form = document.querySelector(".formulaire")
const list = document.getElementById("list");
let todo= "";

//sauvegarde des donnees 

function storeList (){
    window.localStorage.todoList = list.innerHTML;
}

function saveList(){
if( window.localStorage.todoList){
    list.innerHTML = window.localStorage.todoList;
}else{
    list.innerHTML = `<li> "click me twice to remove your task"</li>`;
}
}
saveList()




input.addEventListener('input',(e)=>{
    todo = e.target.value;
});
console.log(todo);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    document.getElementById("list").innerHTML+=`<li>${todo}</li>`;
    form.reset();
    storeList()
});

list.addEventListener('click' , (e) =>{
if(e.target.classList.contains("checked")){
e.target.remove();
console.log(e.target);
}else{
    e.target.classList.add("checked");
    e.target.style.color = "rgb(73, 199, 38)";
    e.target.style.listStyle = "none";
    e.target.style.textDecoration = "line-through";
}
storeList()
});
