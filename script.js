//get elements
const form= document.getElementById("task-form");
const input= document.getElementById('enterTask');
const addTask=document.getElementById('addTask');
const ul= document.getElementById('task-list');

const container= document.querySelector('.container');

loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  //add task 
  form.addEventListener('submit', addTasks);
  // Remove task event
 ul.addEventListener('click', removeTasks);
  //Complete tasks
  ul.addEventListener('click', completeTasks);
  //Dom LoadEvent
 /* document.addEventListener('DOMContentLoaded', getTasks);*/
}

function addTasks(e){
    if(input.value ===''){
      let p= document.createElement('p');
      p.className="error";
      let errorMessage= document.createTextNode('Please, enter Task!');
      p.appendChild(errorMessage);
     container.insertBefore(p, form); 
       setTimeout(function(){
         p.remove();
       },2000);
    }else{
     let li= document.createElement('li');
      li.className= 'list';
      let textNode= document.createTextNode(input.value);
      li.appendChild(textNode);
      //create delete button
      const link = document.createElement('a');
    //add class
    link.className = 'delete';
    link.innerHTML = '<span>X</span>';
    li.appendChild(link);
          
      //create complete Task
       let span= document.createElement('SPAN');
           span.className= 'mycheckedBtn';
         span.innerHTML= '<input type="checkbox"       class="checked">';
         li.appendChild(span);
      //append li to ul
     ul.appendChild(li);

    document.getElementById("enterTask")
      .value = "";
    }
  e.preventDefault();
}

//Remove Task
  function removeTasks(ev){
    if(ev.target.parentElement.classList.contains('delete')){
      ev.target.parentElement.parentElement.remove();
    }
  }

 //complete Task
function completeTasks(event){
     let checkBtn= event.target;
     let myLists= event.target.parentElement.parentElement;
        console.log(myLists);
      if(checkBtn.checked ===true){
        myLists.style.textDecoration='line-through';
      }else{
        myLists.style.textDecoration='none';
      }
}

