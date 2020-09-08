

//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners 
todoButton.addEventListener('click', addTodo); 


//Functions 


/*
This is how you add a new TO DO (Div) to the list/page/container. 
*/
function addTodo(event){
  //Prevent form from submitting 
  event.preventDefault();

  //Create the ToDiv 
  const todoDiv = document.createElement("div"); 
  todoDiv.classList.add("todo"); 

  //Create the LI 
  const newTodo = document.createElement("li");
  
  newTodo.innerText = todoInput.value;
   
  newTodo.classList.add("todo-item");   //this is used for css-styling 
  todoDiv.appendChild(newTodo); 

  //Create Completed Button 
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create Delete 
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
  trashButton.classList.add("trash-btn"); 
  todoDiv.appendChild(trashButton);

  //APPEND TO LIST 
  todoList.appendChild(todoDiv); 

  //Clear Todo INPUT VALUE 
  todoInput.value = "";

}

/*
Add the delete functionality. We're going to be listening to what we're clicking on then act based on that.   
*/



