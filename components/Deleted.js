const btnDelet = () => {
    const btn = document.createElement('button')
    
    btn.classList.add('list__btn')
    btn.innerText = 'deletar'
    btn.addEventListener('click', taskDelet)
  
    return btn
  }
  
  const taskDelet = (event) => {
    const btn = event.target
    const taskDone = btn.parentElement
  
    taskDone.remove()
  
    return btn
  }

export default btnDelet