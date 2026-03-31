const data = JSON.parse(localStorage.getItem("data")) || [];
function addTodo() {
  const todo = document.getElementById("inp").value;
  if (todo.trim() === "") {
    alert("Enter Todo");
    return;
  }
  data.push(todo);
  localStorage.setItem("data", JSON.stringify(data));
  document.getElementById("inp").value = "";
  displayTodo();
}

function displayTodo() {
  const pE = document.getElementById("ul");
  pE.innerHTML = "";

  data.forEach((arr, index) => {
    const li = document.createElement("li");
    li.textContent = arr;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      const newData = prompt("Enter Data:", data[index]);
      if (newData !== "") {
        data[index] = newData;
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
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    pE.appendChild(li);
  });
}

window.onload = displayTodo;
