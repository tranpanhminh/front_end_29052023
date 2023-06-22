const products = ["LG", "Sony", "Samsung"];
window.addEventListener("load", function () {
  renderProduct(products);
});


function handleAdd() {
  // B1: Xác định giá trị cần add
  const inputElement = document.querySelector("#input-add");

  // B2: Thêm vào products

  products.push(inputElement.value);

  //   B3: Xóa value input
  inputElement.value = "";
  // B4: Render lại
  renderProduct(products);
}

function handleDelete(index) {
  // Xóa phần thử thứ index
  products.splice(index, 1);
  // render lại
  renderProduct(products);
}

// function --> chức năng -> đưa dữ liệu lên form
function handleEdit(index) {
  console.log("Kiểm tra index", index);
  // B1: Xác định element muốn thay đổi
  const inputElement = document.querySelector("#input-edit");
  const indexElement = document.querySelector("#product-index");
  const sectionEditShow = document.querySelector(".section-edit");

  sectionEditShow.style.display = "block";
  // B2: Xác định được phần tử để sửa

  const product = products[index];

  // B3: Đưa sản phẩm lên input update
  inputElement.value = product;
  indexElement.value = index;
}

// function --> search sản phẩm
function handleSearch() {
  // B1: Xác định value cần tìm
  const searchValue = document.querySelector("#input-search").value;
  const productSearch = [];
  // B2: Xác định được phần tử để sửa
  for (const element of products) {
    // includes() --> boolean
    if (element.toLowerCase().includes(searchValue.toLowerCase())) {
      productSearch.push(element);
    }
  }
  // render lại sản phẩm
  renderProduct(productSearch);
}

// function --> cập nhập lại products (database)
function handleUpdate() {
  // B1: Lấy giá trị của form muốn thay đổi
  const productValue = document.querySelector("#input-edit").value;
  const productIndex = document.querySelector("#product-index").value;
  console.log("index product", productIndex);
  // B2: Tìm và thay thế product
  if (productIndex != "") {
    products.splice(productIndex, 1, productValue);
  }

  const sectionEditHide = document.querySelector(".section-edit");
  sectionEditHide.style.display = "none";
  // B3: render lại

  renderProduct(products);
}

// Render sản phẩm
function renderProduct(products) {
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
        <td><button onclick="handleEdit(${i})">Edit</button> <button onclick="handleDelete(${i})">Delete</button></td>
      </tr>`;
  }

  //   B4: gán lại element
  table.innerHTML = tableContent;
}
