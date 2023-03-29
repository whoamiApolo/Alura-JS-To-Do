const taskDelet = (atualiza, id) => {
  const index = id;
  const tarefasCadastradas = JSON.parse(localStorage.getItem("StorageHistory"));

  tarefasCadastradas.splice(index, 1);
  localStorage.setItem("StorageHistory", JSON.stringify(tarefasCadastradas));
  atualiza();
};

const btnDelet = (atualiza, id) => {
  const btn = document.createElement("button");

  btn.classList.add("list__btn");
  btn.innerText = "deletar";
  btn.addEventListener("click", () => taskDelet(atualiza, id));

  return btn;
};

export default btnDelet;