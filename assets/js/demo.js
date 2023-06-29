// Có mảng sinh viên
const students = [
  {
    id: "SV1",
    name: "Nguyễn Văn A",
    address: "Đà Nẵng",
    gender: true,
    class: "RA_01",
  },
  {
    id: "SV2",
    name: "Nguyễn Văn B",
    address: "Hà Nội",
    gender: true,
    class: "RA_01",
  },
  {
    id: "SV3",
    name: "Nguyễn Văn C",
    address: "Đồng Nai",
    gender: true,
    class: "RA_01",
  },
  {
    id: "SV4",
    name: "Nguyễn Văn D",
    address: "Hồ Chí Minh",
    gender: true,
    class: "RA_01",
  },
];

// Script bài 1
// Cách 1:
function bai_01_C1() {
  // Lặp qua từng phần tử để tìm sinh viên theo điều kiện
  for (i = 0; i < students.length; i++) {
    if (students[i].id == "SV3") {
      students[i].address = "Cần Thơ";
      break;
    }
  }
  console.log(students);
}

function bai_01_C2() {
  for (i = 0; i < students.length; i++) {
    if (students[i].id == "SV3") {
      //Sử dụng toán tử Spread
      const newInfo = {
        class: "RA_02",
        address: "Cần Thơ",
      };

      // Sử dụng toán tử Spread
      const newStudent = { ...students[i], ...newInfo }; // ...student[i] = id:"SV3", name: ...

      //Cập nhật lại dữ liệu
      students.splice(i, 1, newStudent);
      break;
    }
  }
  console.log(students);
}

// <------------------------> //
// Script bài 2
// Cách 1:
function bai_02_C1() {
  let a = Number(prompt("Nhập vào 1 số: "));
  let b = Number(prompt("Nhập vào 1 số: "));
  let c = Number(prompt("Nhập vào 1 số: "));
  let sumC1 = a + b + c;
  console.log(sumC1);
}

function bai_02_C2() {
  let a = Number(prompt("Nhập vào 1 số: "));
  let b = Number(prompt("Nhập vào 1 số: "));
  let c = Number(prompt("Nhập vào 1 số: "));
  let d = Number(prompt("Nhập vào 1 số: "));
  let e = Number(prompt("Nhập vào 1 số: "));
  let sumC2 = a + b + c + d + e;
  console.log(sumC2);
}

function bai_02_C3(...data) {}

// Cách 2:
function bai_02_cach2() {
  function sum(...numbers) {
    let sum = 0;
    numbers.forEach((number) => {
      sum += number;
    });
    return sum;
  }
  const sumNumber = sum(1, 4, 5, 343, 2, 321);
  console.log("Kết quả sum:", sumNumber);
}

// <------------------------> //
// Script bài 3
// Cách 1
function bai_03_cach_1() {
  convertCode(1, 4, 5, 6);
  function convertCode(...code) {
    let newData = code.map((item) => {
      return {
        code: `SP_${item}`,
      };
    });
    console.log(newData);
  }
}

// Cách 2
function bai_03_cach_2() {
  function convertCode(...numbers) {
    const products = [];
    numbers.forEach((number) => {
      const code = "SP_" + number;
      const codeObj = { code: code };
      // Push đối tượng vào mảng
      products.push(codeObj);
    });
    return products;
  }
  const convertCode_1 = convertCode(1, 4, 5, 6, 7);
  console.log("Kết quả Code: ", convertCode_1);
}

// <------------------------> //
// Script bài 4
function bai_04() {
  function inputProduct(...productsName) {
    const listProducts = [];
    productsName.forEach((product, i) => {
      const code = `SP_${i + 1}`;
      const name = product;
      const quantity = 20;
      const productObj = {
        code: code,
        name: name,
        quantity: quantity,
      };
      listProducts.push(productObj);
    });
    return listProducts;
  }
  const convertArray = inputProduct("Samsung", "Apple", "Xiaomi");
  console.log("Kết quả Code: ", convertArray);
}

// Cách 2
function bai_04_cach_2() {
  // Spread
  function createStore(...products) {
    const store = [];
    // Lặp qua sản phẩm để tạo thông tin của sản phẩm đó
    products.forEach((product, index) => {
      const newProduct = {
        id: "SP_" + (index + 1),
        name: product,
        quantity: 20,
      };
      // Đưa vào Product
      store.push(newProduct);
    });
    console.log("Store: ", store);
  }

  createStore("Iphone 14", "Iphone 13", "Iphone 12", "Macbook Pro");
}

// <------------------------> //
// Script bài 5
function bai_05() {
  class Animal {
    constructor(weight, speed, food, type) {
      this.weight = weight;
      this.speed = speed;
      this.food = food;
      this.type = type;
    }
  }

  class Pet extends Animal {
    constructor(weight, speed, food, type, name, hobby) {
      super(weight, speed, food, type);
      this.name = name;
      this.hobby = hobby;
    }
    getInfo = () => ({
      weight: this.weight,
      speed: this.speed,
      food: this.food,
      type: this.type,
    });
    getPet = () => ({ name: this.name, hobby: this.hobby });
  }

  const lion = new Animal(50, 15, "Meat", "Run");
  const dog = new Pet(35, 21, "Meat", "Dog", "Bon", "Ball");

  console.log("Kiểm tra Lion: ", lion);
  console.log("Kiểm tra Dog: ", dog);
  console.log("Kiểm tra Lion: ", lion);
  console.log("Kiểm tra Dog: ", dog.getInfo());
  console.log("Kiểm tra Dog: ", dog.getPet());
}
