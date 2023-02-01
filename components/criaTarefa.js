import { carregaTarefa } from "./carregaTarefa.js";
import btnFinish from "./Completed.js";
import btnDelet from "./Deleted.js";

export const handleNewItem = (event) => {
  event.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("StorageHistory")) || [];

  const input = document.querySelector("[data-form-input]");
  const result = input.value;

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format("HH:mm");
  const dataFormatada = data.format("DD/MM/YYYY");
  const concluida = false;

  const dados = {
    result,
    dataFormatada,
    horario,
    concluida,
  };
  const tarefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("StorageHistory", JSON.stringify(tarefasAtualizadas));

  input.value = " ";
  carregaTarefa();
};

export const Task = ({ result, horario, concluida }, id) => {
  const task = document.createElement("li");

  const conteudo = `<p class="content">${horario} * ${result}</p>`;
  if (concluida) {
    task.classList.add("done");
  }
  task.classList.add("list__task");

  task.innerHTML = conteudo;

  task.appendChild(btnFinish(carregaTarefa, id));
  task.appendChild(btnDelet(carregaTarefa, id));

  return task;
};