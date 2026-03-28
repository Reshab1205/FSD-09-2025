const data = [];
function addTodo() {
  const todo = document.getElementById("inp").value;
  if (todo.trim() === "") {
    alert("Enter Todo");
    return;
  }
  // const li = document.createElement("li");
  // li.textContent = todo;
  // const editBtn = document.createElement('button')
  // editBtn.textContent = 'Edit'
  // editBtn.onclick = function () {
  //   const newData = prompt('Enter the New Data')
  //   if(newData.trim() !== "" ) {
  //     li.firstChild.textContent = newData
  //   }
  // }
  // const delBtn = document.createElement('button')
  // const pE = document.getElementById("ul");
  //   delBtn.textContent = 'Delete'
  //   delBtn.onclick = function () {
  //     // li.remove()
  //     pE.removeChild(li)
  //   }
  data.push(todo);
  localStorage.setItem("data", JSON.stringify(data));
  // const fetchData = JSON.parse(localStorage.getItem('data'));
  // console.log(fetchData)
  // fetchData.forEach((arr, index) => {
  //   li.textContent = arr
  // })
  // li.textContent = data
  // li.appendChild(editBtn)
  // li.appendChild(delBtn)
  // pE.appendChild(li);
  document.getElementById("inp").value = "";
  displayTodo()
}

function displayTodo() {
  const pE = document.getElementById('ul')
  const fetchData = JSON.parse(localStorage.getItem('data'))
  fetchData.forEach((arr, index) => {
    const li = document.createElement('li')
    li.textContent = arr
    pE.appendChild(li)
  })
  
}

window.onload = displayTodo;
