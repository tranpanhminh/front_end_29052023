const products = [
  {
    id: 1,
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/11/25/16/29/strawberry-545371_640.jpg",
    name: "Sữa dâu",
    price: 30000,
    quantity: 100,
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/09/22/21/35/milk-2777165_640.jpg",
    name: "Sữa đặc",
    price: 0,
    quantity: 100,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/09/22/21/35/milk-2777165_640.jpg",
    name: "Sữa 3",
    price: 0,
    quantity: 100,
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/09/22/21/35/milk-2777165_640.jpg",
    name: "Sữa 4",
    price: 0,
    quantity: 100,
  },
];

const carts = [];

// Nhân viên
// Render sản phẩm
renderProduct();
// function render

function renderProduct() {
  // B1: Element cần thay đổi nội dung

  const renderProductElement = document.querySelector("#render-products");

  //   B2: Đặt biến content
  let renderProductContent = "";

  // B3: Lặp qua từng phần tử để lấy nội dung và thêm html vào

  products.forEach((product) => {
    renderProductContent += `<div class="product">
      <div class="product-img">
        <img
          src=${product.imageUrl}
          alt=""
        />
      </div>
      <div class="product-content">
        <h4 class="product-name">Tên sản phẩm: ${product.name}</h4>
        <p class="product-price">Giá sản phẩm: ${product.price.toLocaleString()} VND</p>
        <p class="product-quantity">Kho: ${
          product.quantity
        }</p><button onclick="handleAddToCart(${
      product.id
    })">Add to cart</button>
      </div>
      
    </div>`;
  });

  //   Gán lại element
  renderProductElement.innerHTML = renderProductContent;
}

// Khi add dữ liệu

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  // Chặn action của form
  e.preventDefault();
  console.log(1111111111111111);

  //   Lấy dữ liệu từ form
  const newProduct = getDataForm();

  //   Thêm product mới vào database
  products.push(newProduct);
  renderProduct();
});

function getDataForm() {
  const imageUrlValue = document.getElementsByName("imageUrl")[0].value;
  const nameValue = document.getElementsByName("name")[0].value;
  const priceValue = Number(document.getElementsByName("price")[0].value);
  const quantityValue = Number(document.getElementsByName("quantity")[0].value);

  //   Cách tạo 1 id tự động

  // Lấy index của products
  const indexLast = products.length - 1;
  const id = products[indexLast].id + 1;
  const newProduct = {
    id: id,
    name: nameValue,
    imageUrl: imageUrlValue,
    quantity: quantityValue,
    price: priceValue,
  };

  return newProduct;
}

// Lấy dữ liệu từ input --> oninput

// Lắng nghe sự kiện của tất cả ô input
const inputElements = document.querySelectorAll(".input-group input");
console.log("check inputElement", inputElements);

// Lặp qua từng phần tử để lắng nghe sự kiện

// Tham khảo thêm
// const newProduct = {};

// inputElements.forEach((inputElement) => {
//   inputElement.addEventListener("input", (event) => {
//     const value = event.target.value;
//     const keyName = event.target.name;

//     // const {name, value} = event.target
//     console.log(111111, value, keyName);

//     // Dùng cách 2 để gán lại giá trị thuộc tính object
//     newProduct[keyName] = value;

//     console.log("New product", newProduct);
//   });
// });

function handleChange(element) {
  console.log(element.value);
}

function handleInput(element) {
  console.log("oninput", element.value);
}

// Khách hàng

function handleAddToCart(id) {
  console.log(id);

  //   Lấy sản phẩm thêm vào giỏ hàng
  let productAdd;

  products.forEach((product) => {
    if (id === product.id && product.quantity > 0) {
      // copy lại sản phẩm
      productAdd = { ...product };
      productAdd.quantity = 1;

      //   trừ số lượng trên store
      product.quantity--;
      renderProduct();
    }
  });

  if (!productAdd) {
    alert("Sản phẩm đã hết hàng!");
  } else {
    // Đem sản phẩm vào trong cart
    let isExist = false;
    carts.forEach((item) => {
      if (productAdd.id === item.id) {
        item.quantity++;
        isExist = true;
      }
    });
    if (!isExist) {
      carts.push(productAdd);
    }

    renderCart();
  }
}

function renderCart() {
  // B1: Element cần thay đổi nội dung

  const renderCartElement = document.querySelector("#render-cart");

  //   B2: Đặt biến content
  let renderCartContent = "";

  // B3: Lặp qua từng phần tử để lấy nội dung và thêm html vào

  carts.forEach((product) => {
    renderCartContent += `<div class="product">
        <div class="product-img">
          <img
            src=${product.imageUrl}
            alt=""
          />
        </div>
        <div class="product-content">
          <h4 class="product-name">Tên sản phẩm: ${product.name}</h4>
          <p class="product-price">Giá sản phẩm: ${product.price.toLocaleString()} VND</p>
          <p class="product-quantity">Kho: ${
            product.quantity
          }</p><button onclick="handleRemove(${
      product.id
    })">Remove product</button>
        </div>
        
      </div>`;
  });

  //   Gán lại element
  renderCartElement.innerHTML = renderCartContent;
}

function handleRemove(id) {
  const count = Number(prompt("Bạn muốn trả bao nhiêu sản phẩm"));

  const removeProduct = carts.find((item) => item.id === id);
  if (count > removeProduct.quantity) {
    alert("Phải trả ít hơn số lượng đã mua");
    return;
  }

  //   Xử lý trừ hàng trong cart
  carts.forEach((item, index) => {
    if ((item.id = id)) {
      // Trừ sản phẩm trong cart
      if (count === item.quantity) {
        carts.splice(index, 1);
      } else {
        item.quantity -= count;
      }
      renderCart();
    }
  });

  //   Xử lý trả hàng về store
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if (product.id === id) {
      product.quantity += count;
      renderProduct();
      break;
    }
  }
}
