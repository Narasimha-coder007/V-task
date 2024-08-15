const textbox=document.getElementById('txt');
const list=document.getElementById('tasks');
function add(){
    if(textbox.value.length===0){
        alert("Please type the task and then clic on Add");
    }
    else{
        let l=document.createElement("li");
        l.innerHTML=textbox.value;
        list.appendChild(l);
        textbox.value="";
        let s=document.createElement('span');
        s.innerHTML='X';
        l.append(s);
        save();
    }
}
list.addEventListener("click",function(event){
    if(event.target.tagName=="SPAN"){
        event.target.parentElement.remove();
    }
    if(event.target.tagName=="LI"){
        event.target.classList.toggle("checked");
    }
    save();
});
function save(){
    localStorage.setItem('dataSaved',list.innerHTML);
}
function reload(){
    list.innerHTML=localStorage.getItem('dataSaved');
}
window.onload=reload();