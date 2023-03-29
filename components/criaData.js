import { Task } from "./criaTarefa.js";

export const criaData = (data) => {
  const tarefas = JSON.parse(localStorage.getItem("StorageHistory")) || [];

  const dataMoment = moment(data, "DD/MM/YYYY");
  const dataTopo = document.createElement("li");
  const content = `<p class="list__description">${dataMoment.format(
    "DD/MM/YYYY"
  )}</p>`;

  dataTopo.innerHTML = content;

  tarefas.forEach((tarefa, id) => {
    const dia = moment(tarefa.dataFormatada, "DD/MM/YYYY");

    const diff = dataMoment.diff(dia);
    if (diff === 0) {
      dataTopo.appendChild(Task(tarefa, id));
    }
  });

  return dataTopo;
};