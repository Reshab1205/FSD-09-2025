const data = JSON.parse(localStorage.getItem("data")) || [];
function addTodo() {
  const todo = document.getElementById("inp").value;
  if (todo.trim() === "") {
    alert("Enter Todo");
    return;
  }
  data.push({todo: todo, completed: false});
  localStorage.setItem("data", JSON.stringify(data));
  document.getElementById("inp").value = "";
  displayTodo();
}

function displayTodo() {
  const pE = document.getElementById("ul");
  pE.innerHTML = "";

  data.forEach((arr, index) => {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.onchange = function () {
      if(checkbox.checked == true) {
        span.style.textDecoration = 'line-through'
      } else {
        span.style.textDecoration = 'none'
      }
      data[index].completed = checkbox.checked
      localStorage.setItem('data', JSON.stringify(data))
    }
    const li = document.createElement("li");
    const span = document.createElement("span")
    span.textContent = arr.todo;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      const newData = prompt("Enter Data:", data[index].todo);
      if ( newData !== null && newData.trim() !== "") {
        data[index].todo = newData;
        localStorage.setItem("data", JSON.stringify(data));
        displayTodo();
      } else {
        alert('Empty Task not accepted')
        return
      }
    };
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
      data.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(data));
      displayTodo();
    };
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    pE.appendChild(li);
  });
}

window.onload = displayTodo;
