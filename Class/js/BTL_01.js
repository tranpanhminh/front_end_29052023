/** Các chức năng
 * Add
 * Render
 * Edit
 * Delete
 */

// Tự động chạy Function Render
window.addEventListener("load", function () {
  renderProduct();
});

// Tạo mảng
products = [
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "Xiaomi Redmi Note 4",
  "Apple Iphone 6S",
];

// Thêm Function Add
function handleAdd() {
  // B1: Xác định giá trị cần add
  const inputElement = document.querySelector("#input-add");

  // B2: Thêm vào Product
  products.push(inputElement.value);

  // B3: Xóa value input đi
  inputElement.value = "";

  // B4: Render lại
  renderProduct();
}

// Thêm Function Delete
function handleDelete(i) {
  console.log(i);
  products.splice(i, 1);
  renderProduct();
}

// Thêm Function Edit
function handleEdit(i) {
  console.log(i);
  let editProduct = prompt(
    `Bạn muốn chỉnh sửa tên sản phẩm ${products[i]} thành: `
  );
  console.log(editProduct);
  products.splice(i, 1, editProduct);
  renderProduct();
}

// Function Data của Table
function renderProduct() {
  // B1: Define Element
  let table = document.querySelector("table");

  // B2: Create Content containing product information in HTML
  let tableContent = "";

  // B3: Loop through each product ---> Display content in HTML
  for (let i = 0; i < products.length; i++) {
    let element = products[i];
    tableContent += `<tr>
     <td>${element}</td>
     <td><button onclick="handleEdit(${i})">Edit</button></td>
     <td><button onclick="handleDelete(${i})">Delete</button></td>
</tr>`;
  }

  // B4: Reattach Element
  table.innerHTML = tableContent;
}
