const saved = JSON.parse(localStorage.getItem("tasks")) || [];

const taskAddBtn = document.querySelector("#btnTask");
taskAddBtn.addEventListener("click", addTask);

function addTask() {
  const nameInput = document.querySelector("#nameTask");
  const deskInput = document.querySelector("#deskTask");

  const taskName = nameInput.value;
  const taskDesk = deskInput.value;

  if (taskName === "" || taskDesk === "") {
    alert("Вы не заполнили поле");
    return;
  }

  saved.push({ name: taskName, desk: taskDesk });
  
  localStorage.setItem("tasks", JSON.stringify(saved));

  nameInput.value = "";
  deskInput.value = "";

  renderTask();
}

function renderTask() {
  const taskList = document.querySelector(".taskList");
  if (saved.length != 0) {
    taskList.innerHTML = "";
    for (let task of saved) {
      let taskObj = `    <div class="task">
      <div class="taskTop">
        <p class="taskName">${task.name}</p>
        <span class="taskDel">&times;</span>
      </div>
      <div class="taskCenter">
        <p>${task.desk}
        </p>
      </div>
    </div>`;

      taskList.insertAdjacentHTML("beforeend", taskObj);
    }
  } else {
    taskList.innerHTML = "<p class='taskNone'>Список дел пуст</p> ";
  }
  openTask();
}
renderTask();

function openTask() {
  let taskList = document.querySelectorAll(".task");
  for (let task of taskList) {
    task.addEventListener("click", function () {
      task.classList.toggle("open");
    });
  }
}
