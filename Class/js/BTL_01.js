/** Các chức năng
 * Add
 * Render
 * Edit
 * Delete
 */

// Tự động chạy Function Render
let index;
// Tạo mảng
products = [
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "Xiaomi Redmi Note 4",
  "Apple Iphone 6S",
];
window.addEventListener("load", function () {
  renderProduct(products);
});

// Thêm Function Add
function handleAdd() {
  // B1: Xác định giá trị cần add
  const inputElement = document.querySelector("#input-add");

  // B2: Thêm vào Product
  products.push(inputElement.value);

  // B3: Xóa value input đi
  inputElement.value = "";

  // B4: Render lại
  renderProduct(products);
}

// Thêm Function Delete
function handleDelete(i) {
  console.log(i);
  products.splice(i, 1);
  renderProduct(products);
}

// Thêm Function Edit
function handleEdit(i) {
  console.log(i);
  let editProduct = prompt(
    `Bạn muốn chỉnh sửa tên sản phẩm ${products[i]} thành: `
  );
  console.log(editProduct);
  // Nếu như người dùng không nhập gì hoặc nhấn Cancel thì dữ liệu bảo toàn
  if (editProduct == "" || editProduct == null) {
    products.splice(i, 0);
    // Ngược lại là người dùng nhập thông tin vào thì Update thông tin mới
  } else {
    products.splice(i, 1, editProduct);
  }

  renderProduct(products);
}

// Function Data của Table
function renderProduct(data) {
  // B1: Define Element
  let table = document.querySelector("table");

  // B2: Create Content containing product information in HTML
  let tableContent = `<tr>
  <th colspan="2">Product</th>
  <th colspan="2">${data.length} products</th>
</tr>`;

  // B3: Loop through each product ---> Display content in HTML
  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    tableContent += `<tr>
     <td><span>${element}</span></td>
     <td><button onclick="handleEdit(${i})">Edit</button></td>
     <td><button onclick="handleEditV2(${i})">Edit V2</button></td>
     <td><button onclick="handleDelete(${i})">Delete</button></td>
</tr>`;
  }

  // B4: Reattach Element
  table.innerHTML = tableContent;
}

// Thêm Function Edit Version 2
function handleEditV2(i) {
  console.log(i);
  index = i;
  let oldName = document.querySelector("#input-edit");
  const displayUpdateBoard = document.querySelector(".form-update-product");
  displayUpdateBoard.style.display = "flex";
  console.log(oldName);
  oldName.value = products[i];
  console.log(oldName.value);

  renderProduct(products);
}

// Thêm Function Cancel cho Edit Version 2
function handleCancel() {
  const displayUpdateBoard = document.querySelector(".form-update-product");
  document.querySelector("#input-edit").value =
    document.querySelector("#input-edit").placeholder;
  products.splice(index, 0);
  displayUpdateBoard.style.display = "none";
  renderProduct(products);
}

// Thêm Function Update cho Edit Version 2
function handleUpdate() {
  const updateProduct = document.querySelector("#input-update").value;
  console.log(updateProduct);
  if (updateProduct == "") {
    products.splice(index, 0);
  } else {
    products.splice(index, 1, updateProduct);
  }

  renderProduct(products);
}

// Thêm function Search
function handleSearch() {
  const searchName = document.querySelector("#input-search").value;
  console.log(searchName);

  const resultFilter = products.filter(function (product) {
    return product.toLowerCase().includes(searchName.toLowerCase());
  });
  console.log(resultFilter);
  renderProduct(resultFilter);
}
