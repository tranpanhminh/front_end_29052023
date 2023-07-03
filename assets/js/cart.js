// Script dành cho nhân viên
let products = [
  {
    id: 1,
    image:
      "https://cdn.tgdd.vn/Products/Images/2386/76884/bhx/sttt-vinamilk-dan-bo-cd-110ml-2-700x467.jpg",
    name: "Milk",
    quantity: 100,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0424/4337/4744/products/yakult-probiotic-health-drink-original-325-ml-65-x-5-energy-drinks-502.jpg?v=1681739055",
    name: "Yakult",
    quantity: 100,
  },
  {
    id: 3,
    image: "https://thucphammeli.com/wp-content/uploads/2020/07/38a.jpg",
    name: "Butter",
    quantity: 100,
  },
  {
    id: 4,
    image:
      "https://cooponline.vn/wp-content/uploads/2021/02/nuoc-giai-khat-coca-cola-lon-320ml-1.jpg",
    name: "Coca-Cola",
    quantity: 100,
  },
];

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
  let inputProductQuantity = Number(
    document.querySelector("#input-product-quantity").value
  );

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
    if (
      inputImage == "" &&
      inputProductName == "" &&
      inputProductQuantity == ""
    ) {
      return;
    }
    if (
      inputImage == "" ||
      inputProductName == "" ||
      inputProductQuantity == ""
    ) {
      return;
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
    <img src="${productsCart[i].image}"
        alt="">
    <h4 class="product-name">${productsCart[i].name}</h4>
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

function handleAddToCart(i) {
  let askToAdd = confirm("Bạn muốn mua sản phẩm: " + products[i].name + "?");
  let addProductQuantityToCart;
  if (askToAdd) {
    addProductQuantityToCart = Number(
      prompt("Nhập số lượng sản phẩm bạn muốn mua")
    );
    if (addProductQuantityToCart > products[i].quantity) {
      alert("Không đủ số lượng sản phẩm!");
      return;
    }
    if (addProductQuantityToCart === 0) {
      return;
    }
  } else {
    return;
  }
  let addProductToCart = { ...products[i] };
  addProductToCart.quantity = addProductQuantityToCart;
  products[i].quantity -= addProductToCart.quantity;

  productsCart.push(addProductToCart);
  renderCart(addProductToCart);
  renderStore(products);
}

function handleDeleteProductCart(i) {
  let askToDelete = confirm(
    "Bạn muốn xóa sản phẩm: " + productsCart[i].name + " khỏi giỏ hàng?"
  );
  if (askToDelete) {
    let indexValue;
    for (j = 0; j < products.length; j++) {
      if (productsCart[i].name === products[j].name) {
        indexValue = j;
        products[indexValue].quantity += Number(productsCart[i].quantity);
      }
    }
  }
  productsCart.splice(i, 1);
  renderStore(products);
  renderCart(productsCart);
}

function handleEditProductCart(i) {
  let askToEdit = confirm(
    "Bạn muốn sửa sản phẩm: " + productsCart[i].name + " trong giỏ hàng?"
  );
  let askProductQuantityRefund = Number(
    prompt("Nhập số lượng sản phẩm bạn muốn trả: ")
  );
  if (askToEdit) {
    let indexValue;
    for (j = 0; j < products.length; j++) {
      if (productsCart[i].name === products[j].name) {
        indexValue = j;
        if (productsCart[i].quantity < askProductQuantityRefund) {
          alert("Số lượng sản phẩm vượt quá! Vui lòng nhập lại!");
        } else if (productsCart[i].quantity > askProductQuantityRefund) {
          productsCart[i].quantity -= askProductQuantityRefund;
          products[indexValue].quantity += askProductQuantityRefund;
        } else if (productsCart[i].quantity === askProductQuantityRefund) {
          handleDeleteProductCart(i);
        }
      }
    }
  }
  renderStore(products);
  renderCart(productsCart);
}

// Script Login, Logout, Signup
let accounts = [];
function Account(username, password) {
  (this.username = username), (this.password = password);
}
let account_1 = new Account("admin1", "123");
let account_2 = new Account("admin2", "123");
let account_3 = new Account("vip", "admin");

accounts.push(account_1, account_2, account_3);
console.log(accounts);

// Function Signup
function handleSignup() {
  let inputUserName = prompt("Nhập Username: ");
  let inputPassword = prompt("Nhập Password: ");

  if (inputUserName === null || inputPassword === null) {
    alert("Hãy nhập đủ thông tin!");
  } else if (inputUserName === "" || inputPassword === "") {
    alert("Hãy nhập đủ thông tin!");
  } else {
    let newAccount = new Account(inputUserName, inputPassword);
    accounts.push(newAccount);
    alert("Đăng ký thành công!");
  }

  console.log(accounts);
}
// Function Login
function handleLogin() {
  let typeUserName = prompt("Nhập Username:");
  let typePassword = prompt("Nhập Password: ");

  let typeAccount = {
    username: typeUserName,
    password: typePassword,
  };

  let foundAccount = accounts.find(
    (account) =>
      account.username === typeAccount.username &&
      account.password === typeAccount.password
  );

  if (foundAccount) {
    alert("Đăng nhập thành công");
    console.log("Kiểm tra thông tin đăng nhập: ", foundAccount, typeAccount);
  } else {
    alert("Tài khoản hoặc mật khẩu không hợp lệ!");
    return;
  }

  let adminBar = document.querySelector(".group-btn-store");
  adminBar.style.display = "block";

  let loginBar = document.querySelector(".login-product-btn");
  loginBar.style.display = "none";

  let logOutBtn = document.querySelector(".logout-product-btn");
  logOutBtn.style.display = "inline-block";

  let signUpBtn = document.querySelector(".signup-product-btn");
  signUpBtn.style.display = "none";
}

function handleLogOut() {
  let adminBar = document.querySelector(".group-btn-store");
  adminBar.style.display = "none";

  let loginBar = document.querySelector(".login-product-btn");
  loginBar.style.display = "inline-block";

  let logOutBtn = document.querySelector(".logout-product-btn");
  logOutBtn.style.display = "none";

  let signUpBtn = document.querySelector(".signup-product-btn");
  signUpBtn.style.display = "inline-block";
}
