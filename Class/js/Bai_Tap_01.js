let todolist = [
  "Buy flowers for girlfriend",
  "Buy movie tickets",
  "Book a table at the restaurant",
];
if (localStorage.getItem("todolist")) {
  [];
  console.log(localStorage.getItem("todolist"));
} else {
  localStorage.setItem("todolist", JSON.stringify(todolist));
}

// Hoặc có thể trình bày
// dataString = localStorage.getItem("todolist");
// if (dataString !== null || dataString !== undefined) {
//   [];
//   console.log(localStorage.getItem("todolist"));
// } else {
//   localStorage.setItem("todolist", JSON.stringify(todolist));
//   console.log(localStorage.setItem("todolist", JSON.stringify(todolist)));
// }

function renderToDoList() {
  let tableToDoList = document.querySelector("table");
  let tableToDoListContent = "";
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  tableToDoListContent = `<thead>
  <tr>
      <th>No.</th>
      <th>Todo Item</th>
      <th>Status</th>
      <th>Actions</th>
  </tr>
</thead>`;
  for (let i = 0; i < todolist.length; i++) {
    tableToDoListContent += `<tbody>
    <tr>
        <td>${i + 1}</td>
        <td>${todolist[i]}</td>
        <td>In progress</td>
        <td>
            <div class="group-btn">
                <button class="edit-btn" onclick="handleEdit(${i})">EDIT</button>
                <button class="delete-btn" onclick="handleDelete(${i})">DELETE</button>
                <button class="finished-btn" onclick="handleFinished(${i})">FINISHED</button>
            </div>
        </td>
    </tr>
    </tbody>`;
  }

  tableToDoList.innerHTML = tableToDoListContent;
}
renderToDoList();

function handleDelete(i) {
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  todolist.splice(i, 1);
  localStorage.setItem("todolist", JSON.stringify(todolist));
  renderToDoList();
}

function handleEdit(i) {
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  console.log(todolist);
  let inputName = prompt("Nhập tên cần thay");
  console.log(inputName);
  if (inputName == "" || inputName == null) {
    return;
  } else {
    todolist.splice(i, 1, inputName);
  }
  localStorage.setItem("todolist", JSON.stringify(todolist));
  renderToDoList();
}

function handleAdd() {
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  console.log(todolist);
  let inputValue = document.querySelector("input[type='text']").value;
  todolist.push(inputValue);
  console.log(todolist);
  localStorage.setItem("todolist", JSON.stringify(todolist));
  renderToDoList();
}
