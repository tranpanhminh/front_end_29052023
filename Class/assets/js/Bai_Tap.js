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
