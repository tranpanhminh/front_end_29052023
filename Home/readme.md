Đoạn code handleAddToCart sai ở đâu mà tôi add sản phẩm thứ 1 mà nó cứ tiếp tục add thêm các sản phẩm 2,3,4, lần lượt tiếp theo
// Function Render Store
function renderStore() {
  let storeContainer = document.querySelector(".store-container");
  let storeContainerContent = "";
  for (i = 0; i < products.length; i++) {
    storeContainerContent += `<div class="product-item">
    <img src="${products[i].image}"
        alt="">
    <h4 class="product-name">${products[i].name}</h4>
    <h4 class="product-count">Quantity: ${products[i].quantity}</h4>
    <button class="add-btn" onclick="handleAddToCart(${i})">Add To Cart</button>
</div>`;
  }
  storeContainer.innerHTML = storeContainerContent;
}
renderStore(products);

// Function thêm sản phẩm
function handleAddProductToStore() {
  let showFormAddProductToStore = document.querySelector(
    ".form-add-product-to-store"
  );
  showFormAddProductToStore.style.display = "block";
}

function uploadProduct() {
  let inputImage = document.querySelector("#input-image-url").value;
  let inputProductName = document.querySelector("#input-product-name").value;
  let inputProductQuantity = document.querySelector(
    "#input-product-quantity"
  ).value;

  let newProduct = {
    image: inputImage,
    name: inputProductName,
    quantity: inputProductQuantity,
  };

  for (let i = 0; i < products.length; i++) {
    if (newProduct.name.toLowerCase() === products[i].name.toLowerCase()) {
      alert("Sản phẩm đã tồn tại trong cửa hàng!");
      return; // Thoát khỏi hàm sau khi thêm sản phẩm mới
    }
  }
  products.push(newProduct);

  document.querySelector("#input-image-url").value = "";
  document.querySelector("#input-product-name").value = "";
  document.querySelector("#input-product-quantity").value = "";

  renderStore(products);
  closeAddProductForm();
}

// Function Edit
function handleEditProductToStore() {
  let showFormEditProductToStore = document.querySelector(
    ".form-edit-product-to-store"
  );
  showFormEditProductToStore.style.display = "block";

  dropList();
}

function dropList() {
  let dropListElement = document.querySelector(".drop-list-product");
  let dropListContent = "";
  dropListContent = `<option value="">---Hãy chọn sản phẩm bạn muốn sửa---</option>`;
  for (let product of products) {
    dropListContent += `<option value="${product.name}">${product.name}</option>`;
  }

  dropListElement.innerHTML = dropListContent;
}

function onChangeDropList() {
  let optionValue = document.querySelector(".drop-list-product").value;
  console.log(optionValue);

  let oldProductID = document.querySelector("#product-id").value;
  let oldImageUrl = document.querySelector("#old-image-url").value;
  let oldProductName = document.querySelector("#old-product-name").value;
  let oldProductQuantity = document.querySelector(
    "#old-product-quantity"
  ).value;

  for (let i = 0; i < products.length; i++) {
    if (optionValue == products[i].name) {
      oldProductID = i + 1;
      console.log("ID là: ", oldProductID);

      oldImageUrl = products[i].image;
      console.log("Image là: ", oldImageUrl);

      oldProductName = products[i].name;
      console.log("Product Name là: ", oldProductName);

      oldProductQuantity = products[i].quantity;
      console.log("Quantity là: ", oldProductQuantity);
    }
  }

  document.querySelector("#product-id").value = oldProductID;
  document.querySelector("#old-image-url").value = oldImageUrl;
  document.querySelector("#old-product-name").value = oldProductName;
  document.querySelector("#old-product-quantity").value = oldProductQuantity;
}

function updateProduct() {
  let indexValue = document.querySelector("#product-id").value;
  let updateImageUrl = document.querySelector("#update-image-url").value;
  let updateProductName = document.querySelector("#update-product-name").value;
  let updateProductQuantity = document.querySelector(
    "#update-product-quantity"
  ).value;

  for (let i = 0; i < products.length; i++) {
    if (updateImageUrl === "") {
      updateImageUrl = products[indexValue - 1].image;
    }
    if (updateProductName === "") {
      updateProductName = products[indexValue - 1].name;
    }
    if (updateProductQuantity === "") {
      updateProductQuantity = products[indexValue - 1].quantity;
    }
  }

  let updateProduct = {
    image: updateImageUrl,
    name: updateProductName,
    quantity: updateProductQuantity,
  };

  if (indexValue !== "") {
    products.splice(indexValue - 1, 1, updateProduct);
  }
  renderStore(products);
  closeUpdateProduct();
}

function dropListDeleteProduct() {
  let dropListDeleteElement = document.querySelector(
    ".drop-list-delete-product"
  );
  let dropListDeleteContent = "";
  dropListDeleteContent = `<option value="">---Hãy chọn sản phẩm bạn muốn sửa---</option>`;
  for (let product of products) {
    dropListDeleteContent += `<option value="${product.name}">${product.name}</option>`;
  }

  dropListDeleteElement.innerHTML = dropListDeleteContent;
}

function deleteProduct() {
  let showFormDeleteProduct = document.querySelector(
    ".form-delete-product-to-store"
  );
  showFormDeleteProduct.style.display = "block";

  dropListDeleteProduct();
}

function onDeleteDropList() {
  let optionValue = document.querySelector(".drop-list-delete-product").value;
  console.log(optionValue);
  for (i = 0; i < products.length; i++) {
    if (optionValue === products[i].name) {
      products.splice(i, 1);
    }
  }
}

function deleteProductToStore() {
  onDeleteDropList();
  dropListDeleteProduct();
  renderStore(products);
  closeDeleteProductToStore();
}

function closeAddProductForm() {
  let closeAddProductForm = document.querySelector(
    ".form-add-product-to-store"
  );
  closeAddProductForm.style.display = "none";
}

function closeAddProductForm() {
  let closeAddProductForm = document.querySelector(
    ".form-add-product-to-store"
  );
  closeAddProductForm.style.display = "none";
}

function closeUpdateProduct() {
  let closeUpdateProductForm = document.querySelector(
    ".form-edit-product-to-store"
  );
  closeUpdateProductForm.style.display = "none";
}

function closeDeleteProductToStore() {
  let closeDeleteProductForm = document.querySelector(
    ".form-delete-product-to-store"
  );
  closeDeleteProductForm.style.display = "none";
}

// Function cho người mua
// Function Render Cart

productsCart = [];
function renderCart() {
  let renderCart = document.querySelector(".cart-container");
  let renderCartContent = "";
  for (let i = 0; i < productsCart.length; i++) {
    renderCartContent += `<div class="product-item">
    <img src="${products[i].image}"
        alt="">
    <h4 class="product-name">${products[i].name}</h4>
    <h4 class="product-count">Quantity: ${productsCart[i].quantity}</h4>
    <div class="group-btn-buyer">
    <button class="edit-btn" onclick="handleEditProductCart(${i})">Edit</button>
    <button class="delete-btn" onclick="handleDeleteProductCart(${i})">Delete</button>
    </div>
</div>`;
  }
  renderCart.innerHTML = renderCartContent;
}

renderCart(productsCart);

function handleAddToCart(index) {
  let addProductNameToCart = products[index].name;
  let addProductImageToCart = products[index].image;

  let addProductQuantityToCart = Number(prompt("Nhập số lượng bạn muốn mua"));

  if (addProductQuantityToCart > products[index].quantity) {
    alert("Số lượng vượt quá hàng có sẵn, hãy nhập lại!");
    return;
  }

  products[index].quantity -= addProductQuantityToCart;

  let addProductToCart = {
    image: addProductImageToCart,
    name: addProductNameToCart,
    quantity: addProductQuantityToCart,
  };

  productsCart.push(addProductToCart);
  renderCart(productsCart);
  renderStore(products);
}