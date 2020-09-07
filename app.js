

//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners 
todoButton.addEventListen('click', addTodo); 


//Functions 

function addTodo(event){
  console.log("hello");


  //Prevent form from submitting 
  event.preventDefault();

  // 


}