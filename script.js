//get inputs 
let overlay=document.querySelector(".popup-overlay");
let box=document.querySelector(".popup-box");
let addbutton=document.getElementById("addbtn");
let cancelbutton=document.getElementById("cancelbook");
//adding view 
addbutton.addEventListener('click',()=>{
    overlay.style.display="block";
    box.style.display="block";
})

//selecting cancel button

cancelbutton.addEventListener('click',(event)=>{
    event.preventDefault();
    overlay.style.display="none";
    box.style.display="none";

})

//get inputs for new book addition
let container=document.querySelector(".container");
let addition=document.getElementById("addbook");
let title=document.getElementById("title");
let author=document.getElementById("author");
let textarea=document.getElementById("textarea");

addition.addEventListener('click',(event)=>{
    event.preventDefault();
    let div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h3>${title.value}</h3>
        <h4>${author.value}</h4>
        <p>${textarea.value}</p>    
        <button class="btn" onclick="deletebook(event)">Delete</button>`
    container.append(div);
    overlay.style.display="none";
    box.style.display="none";

})
function deletebook(event){
    event.target.parentElement.remove();
}

