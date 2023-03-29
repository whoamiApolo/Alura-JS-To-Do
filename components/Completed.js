const done = (atualiza, id) => {
  const tarefaCadastradas = JSON.parse(localStorage.getItem("tarefas"));

  tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefaCadastradas));

  atualiza();
};

const btnFinish = (atualiza, id) => {
  const btn = document.createElement("button");

  btn.classList.add("list__concluir");
  btn.innerText = "concluir";

  btn.addEventListener("click", () => done(atualiza, id));

  return btn;
};

export default btnFinish;