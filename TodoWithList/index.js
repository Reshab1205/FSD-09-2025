function addTodo() {
  const todo = document.getElementById("inp").value;
  if (todo.trim() === "") {
    alert('Enter Todo')
    return
  }
  const li = document.createElement("li");
  li.textContent = todo;
  const editBtn = document.createElement('button')
  editBtn.textContent = 'Edit'
    const delBtn = document.createElement('button')
    const pE = document.getElementById("ul");
    delBtn.textContent = 'Delete'
    delBtn.onclick = function () {
      // li.remove()
      pE.removeChild(li)
    }
  li.appendChild(editBtn)
  li.appendChild(delBtn)
  pE.appendChild(li);
  document.getElementById("inp").value = "";
}
