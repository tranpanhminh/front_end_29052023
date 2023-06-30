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
}
