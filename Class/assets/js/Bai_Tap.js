// Script bài 1
let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Yakult", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

let product = "";
function bai_01() {
  let id = Number(prompt("Nhập ID:"));

  for (i = 0; i < products.length; i++) {
    if (id == products[i].id) {
      alert("ID bị trùng hãy nhập lại!");
      return;
    }
  }

  let name = prompt("Nhập Name:");
  let count = Number(prompt("Nhập Count:"));

  product = { id, name, count };
  console.log(product);
}

function handleAdd() {
  products.push(product);
  console.log(products);
}

// Xóa đối tượng có ID là 2
function handleRemove() {
  let index = 0;
  for (i = 0; i < products.length; i++) {
    if (products[i].id == 2) {
      index = i;
      break;
    }
  }
  products.splice(index, 1);
  console.log(products);
}

// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
function handleUpdate() {
  let index = 0;
  for (i = 0; i < products.length; i++) {
    if (products[i].id == 3) {
      index = i;
      products[i].count = 0;
      break;
    }
  }
  console.log(products);
}

// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không? Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
function handleSearch() {
  let keyword = "Butter";
  let results = [];

  for (const item of products) {
    if (item.name.toLowerCase().includes(keyword.toLowerCase())) {
      results.push(item);
    }
  }

  // Hoặc
  // let findData = products.find((item) => {
  //   return item.name == "Butter";
  // });
  // console.log(findData);

  console.log(results);
}

// <-------------------------------------> //
// Script bài 2
function Animal(name, speed) {
  // Khai báo thuộc tính
  this.name = name;
  this.speed = speed;

  // Khai báo hành vi
  this.catch = function (object) {
    if (this.speed > object.speed) {
      console.log("Bắt được mèo");
      console.log(
        "Tốc độ của con chuột sau khi bị bắt là: ",
        object.speed - object.speed
      );
    } else {
      console.log("Không thể bắt được con mèo này!");
    }
  };

  // this.speak = () = {}

  this.speak = function () {
    console.log(`${this.name} says woof!`);
  };

  this.getSpeed = () => {
    return this.speed;
  };

  this.setSpeed = (value) => {
    this.speed = value; // Không cần return
  };
}

function bai_02() {
  const dog = new Animal("Shiba", 500);
  const cat = new Animal("Tom", 300);

  dog.speak();
  dog.catch(cat);

  dog.setSpeed(50);
  console.log("Tốc độ của chó mới: ", dog.getSpeed());
}

// <-------------------------------------> //
// Script bài 4
let courseArray = [];

function bai_04() {
  let inputValue = "";
  while (inputValue !== "E") {
    inputValue = prompt(
      "Nhập vào 1 trong 5 chữ C / R / U / D / E: "
    ).toUpperCase();
    if (inputValue === "C") {
      pressC();
      render();
    } else if (inputValue === "R") {
      pressR();
    } else if (inputValue === "U") {
      pressU();
    } else if (inputValue === "D") {
      pressD();
    }
  }
  alert("Cảm ơn bạn đã đến với Rikkei Academy");
}

function pressC() {
  let inputCourse = prompt("Nhập khóa học: ");
  let inputStatus = prompt("Tình trạng khóa học: ");

  let course = {
    name: inputCourse,
    complete: inputStatus,
  };

  courseArray.push(course);
}

function render() {
  let listCourse = document.querySelector(".list-course");
  let courseContent = "";
  for (let i = 1; i <= courseArray.length; i++) {
    courseContent += `<p class="course-item">${i}. ${
      courseArray[i - 1].name
    }</p>
    <p class="course-status">Complete: ${courseArray[i - 1].complete}</p>`;
  }

  listCourse.innerHTML = courseContent;
}

function pressR() {
  const course_01 = new Course(1, "HTML", "false");
  const course_02 = new Course(2, "CSS", "false");
  const course_03 = new Course(3, "Basic of Javascript", "false");
  const course_04 = new Course(4, "Node package Manager (npm)", "false");
  const course_05 = new Course(5, "Git", "false");
  let listCourse = document.querySelector(".list-course");
  let courseContent = "";
  courseArray.push(course_01, course_02, course_03, course_04, course_05);
  for (i = 0; i < courseArray.length; i++) {
    courseContent += `<p class="course-item">${courseArray[i].id}. ${courseArray[i].name}</p>
    <p class="course-status">Complete: ${courseArray[i].complete}</p>`;
  }
  listCourse.innerHTML = courseContent;
  render(courseArray);
}

function Course(id, name, complete) {
  this.id = id;
  this.name = name;
  this.complete = complete;
}

function pressU() {
  let inputIndex = prompt("Nhập vào vị trí khóa học bạn muốn edit");
  let newCourseName = prompt("Nhập vào tên Course mới");
  let newCourseComplete = prompt("Nhập vào tình trạng của Course mới");

  let newCourse = {
    name: newCourseName,
    complete: newCourseComplete,
  };

  inputIndex = parseInt(inputIndex) - 1;
  courseArray.splice(inputIndex, 1, newCourse);
  render(courseArray);
}

function pressD() {
  let inputIndex = prompt("Nhập vào vị trí khóa học bạn muốn xóa");
  inputIndex = parseInt(inputIndex) - 1;
  courseArray.splice(inputIndex, 1);
  render(courseArray);
}

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
