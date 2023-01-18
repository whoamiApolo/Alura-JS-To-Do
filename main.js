import btnFinish from "./components/Completed.js"
import btnDelet from "./components/Deleted.js"

const newTask = document.querySelector("[data-form-button]");

const createTask = (event) => {
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const result = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("list__task");
  const content = `<p class="list__description">${result}</p>`;

  task.innerHTML = content

  task.appendChild(btnFinish());
  task.appendChild(btnDelet());
  
  list.appendChild(task);
};

newTask.addEventListener("click", createTask);