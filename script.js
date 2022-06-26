const body = document.querySelector("body");
const main = document.createElement("div");
main.classList.add("main");
main.textContent = "Welcome to Etch-A-Sketch";

const btn = document.createElement("button");
btn.classList.add("reset");
btn.textContent = "reset";
const size = document.createElement("button");
size.classList.add("size");
size.textContent = "size";
btn.onclick = resetgrid;


body.appendChild(main);
body.appendChild(btn);
body.appendChild(size);
size.onclick = setsize;


const container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);
let currrsize = 16;//global variable for resetting the curent
creategrid(currrsize);


function resetgrid(){
    creategrid(currrsize);
}

function setsize(){
    currrsize = prompt("please enter the size of the grid 1-100");
    creategrid(currrsize);
}
function creategrid(l){
    
    let squares = container.querySelectorAll('div');
    squares.forEach(((div)=>div.remove()));
    container.style.gridTemplateColumns = `repeat(${l}, 1fr)`
    container.style.gridTemplateRows = `repeat(${l}, 1fr)`
    for (let i = 0; i<l*l;i++){
        const box = document.createElement("div");
        box.addEventListener('mouseover', ()=>{
            box.style.backgroundColor = "black";
        });
        box.classList.add("box");
        box.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
        container.appendChild(box);
        
    }
}