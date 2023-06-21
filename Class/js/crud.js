const products = ["LG", "Sony", "Samsung"];

renderProduct();

function handleAdd() {
  // B1: Xác định giá trị cần add
  const inputElement = document.querySelector("#input-add");

  // B2: Thêm vào products

  products.push(inputElement.value);

  //   B3: Xóa value input
  inputElement.value = "";
  // B4: Render lại
  renderProduct();
}

function handleDelete(index) {
  // Xóa phần thử thứ index
  products.splice(index, 1);
  // render lại
  renderProduct();
}

function renderProduct() {
  // B1: Xác định element
  const table = document.querySelector("table");

  // B2: Tạo content chứa thông tin sp theo html
  let tableContent = `<tr>
  <th>Product</th>
  <th>${products.length} products</th>
</tr>`;

  // B3: Lặp qua từng sp --> hiển thị nội dung theo html

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    tableContent += `<tr>
        <td>${element}</td>
        <td><button>Edit</button> <button onclick="handleDelete(${i})">Delete</button></td>
      </tr>`;
  }

  //   B4: gán lại element
  table.innerHTML = tableContent;
}
