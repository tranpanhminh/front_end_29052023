// Script dành cho nhân viên
let products = [
  {
    image:
      "https://cdn.tgdd.vn/Products/Images/2386/76884/bhx/sttt-vinamilk-dan-bo-cd-110ml-2-700x467.jpg",
    name: "Milk",
    quantity: 100,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0424/4337/4744/products/yakult-probiotic-health-drink-original-325-ml-65-x-5-energy-drinks-502.jpg?v=1681739055",
    name: "Yakult",
    quantity: 100,
  },
  {
    image: "https://thucphammeli.com/wp-content/uploads/2020/07/38a.jpg",
    name: "Butter",
    quantity: 100,
  },
  {
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
}
