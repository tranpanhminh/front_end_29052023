// <-------------------------------------> //
// Script bài 5
let stores = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];
let carts = [];

function bai_05() {
  let inputValue = "";
  while (inputValue !== "E") {
    inputValue = prompt(
      "Nhập vào 1 trong 5 chữ C / R / U / D / E: "
    ).toUpperCase();
    if (inputValue === "C") {
      pressC(stores);
    } else if (inputValue === "R") {
      pressR();
    } else if (inputValue === "U") {
      pressU();
    } else if (inputValue === "D") {
      pressD();
    }
  }
  alert("Cảm ơn bạn đã đến với Rikkei Stores");
}

let buyProduct = [];

function pressC() {
  let inputProduct = prompt("Nhập tên sản phẩm muốn mua:");
  let inputCart = Number(prompt("Nhập số lượng sản phẩm bạn muốn mua: "));

  for (let i = 0; i < stores.length; i++) {
    if (stores[i].name.toLowerCase() == inputProduct.toLowerCase()) {
      stores[i].count -= inputCart;
    }
  }

  let product = {
    name: inputProduct,
    count: inputCart,
  };

  buyProduct.push(product);

  let sumCart = 0;
  for (let i = 0; i < buyProduct.length; i++) {
    sumCart += buyProduct[i].count;
  }

  let listBuy = document.querySelector(".buy-product");
  let listBuyContent = "";
  listBuyContent += ` <p class="cart">Cart: ${sumCart}</p>`;
  for (let i = 0; i < buyProduct.length; i++) {
    listBuyContent += `<p class="product-name">${i + 1}. ${
      buyProduct[i].name
    }</p>
      <p class="product-count">Count: ${buyProduct[i].count}</p>`;
  }

  listBuy.innerHTML = listBuyContent;
  render(stores);
}

function pressR() {
  render(stores);
}

function render(stores) {
  let listStore = document.querySelector(".list-store");
  let listStoreContent = "";
  listStoreContent += ` <p class="cart">Cart: 0</p>`;
  for (let i = 0; i < stores.length; i++) {
    listStoreContent += `<p class="store-name">${i + 1}. ${stores[i].name}</p>
      <p class="count">Count: ${stores[i].count}</p>`;
  }

  listStore.innerHTML = listStoreContent;
}
