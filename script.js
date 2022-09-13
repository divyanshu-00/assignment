function addTask()
{
    console.log("working");
    var fixed=document.getElementById("fixed");
    if(fixed.style.display=="block")
        fixed.style.display="none";
    else
        fixed.style.display="block";
}
let k=1;
function check()
{
    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://dummy_server', true);   
    // xhr.setRequestHeader("Content-type","json");
    // xhr.onload = function(){     


    var title=document.getElementById("title");
    var fixed=document.getElementById("fixed");
    fixed.style.display="none";
    if(title.value.length<1)
        return false;
    var todo=document.getElementById("todo");
    const element_todo = document.createElement('div');
    element_todo.setAttribute('id' , 'k++');
    element_todo.setAttribute('draggable' , 'true');
    element_todo.classList.add('task');
    element_todo.style.border="1px solid #0dcaf0";
    var front=document.createElement('p');
    // var back = document.createElement('p');
    front.setAttribute('id','front');
    front.setAttribute('contenteditable','true');
    // back.setAttribute('id','back');
    
    // var inprog=document.createElement('button');
    // // var details=document.createElement('button');
    // inprog.setAttribute('id','shift');
    // inprog.setAttribute('type', 'button');
    // inprog.classList.add('btn','btn-outline-info', 'mod_btn' , 'btn-sm');
    // inprog.innerText="In Progress";
    var prior=document.createElement('div');
    prior.setAttribute('id','prior');
      // if(imp.value == "important")
      var imp = document.getElementById("imp");
    if(document.getElementById("imp").checked)
        prior.style.backgroundColor="red";
    else
        prior.style.backgroundColor="rgb(172, 255, 48)";
  
        var del=document.createElement('button');
        // var details=document.createElement('button');
        del.setAttribute('id','del');
        del.setAttribute('type', 'button');
        del.classList.add('btn','btn-outline-info', 'mod_btn', 'btn-sm');
        del.innerText="Delete task";
    

    element_todo.appendChild(front);
    // element_todo.appendChild(back);
    // element_todo.appendChild(inprog);
    element_todo.appendChild(del);
    // element_todo.appendChild(details);
    element_todo.appendChild(prior);

    console.log(title.value);
    front.innerText=title.value;


    todo.appendChild(element_todo);


    // let obj = `{"id":k-1 , "task":title, "priority":imp , "status":"backlog"}`;


    return false;


    // }
    // xhr.send(obj);
    
}
var drag;
document.addEventListener('dragstart', e=>{
    console.log("drag start");
    var temp =e.target.id;
    drag=e.target;
    setTimeout(() =>{
        e.target.style.display="none";
    },0);
    console.log(temp);
    
})
document.addEventListener('dragend', e=>{
    console.log("drag end");
    e.target.style.display="block";
})
var box=document.getElementsByClassName('box');
for( var temp of box)
{
   
    temp.addEventListener('drop' , e=>{
        console.log("drop");
        e.target.append(drag);
    })
    temp.addEventListener('dragover',e=>{
        console.log("drop");
        e.preventDefault();
    })
}
// for()

document.addEventListener('click', e=>{

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://dummy_server', true);   
    // xhr.onload = function(){

    var temp =e.target.id;
    console.log(temp);
    if(temp == 'del')
    {
        var parent=e.target.parentElement;
        console.log(parent);
        parent.remove();
        
    
    }
// }
// xhr.send();

    
})