const btnFinish = () => {
    const btn = document.createElement("button");
  
    btn.classList.add("list__concluir");
    btn.innerText = "concluir";
    btn.addEventListener("click", done);
  
    return btn;
  };
  
  const done = (event) => {
    const btn = event.target;
    const taskDone = btn.parentElement;
  
    taskDone.classList.toggle("done");
  };

  export default btnFinish