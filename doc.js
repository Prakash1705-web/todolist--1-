function addTask() {
  var inputTask = document.getElementById("input");
  var inputval = inputTask.value.trim();

  if (inputval === "") {
    alert("Please enter a task");
    return;
  } else {
    var tasklist = document.getElementById("list-container");
    tasklist.innerHTML += `
        <li class="task-item">
        <div class="left">
          
          <span>${inputval}</span>
        </div>
        <div class="btns">
          <button id="edit" onclick="editTask(this)">Edit</button>
          <button id="dlt" onclick="deleteTask(this)">Delete</button>
        </div>
      </li>`
    // tasklist.innerHTML += "<li>" + inputTask.value + "</li>";
    inputTask.value = "";
  }
}

function deleteTask(btn) {
  // .parentelement = <div class="btns"> ,, .parentElement = <li class="task-item">
  btn.parentElement.parentElement.remove();
}

function editTask(button) {
  // Go up to the <li> element
  var listItem = button.parentElement.parentElement;

  // Get the <span> that holds the task text
  var taskText = listItem.querySelector("span");

  // Ask the user to enter a new task text
  var newTask = prompt("Edit your task:", taskText.innerText);

  // If user entered something, update the task
  if (newTask) {
    taskText.innerText = newTask.trim();
  }
}
