// Khai báo 1 mảng Array

// Cách 1:
const cars = ["BMW", "Toyota", "Honda", "Vinfast"];

// Cách 2:
const students = new Array(
  "Minh",
  "Hạnh",
  "Thắng",
  "Nguyên",
  "Nương",
  "Hùng",
  "Tú",
  "Tài"
);
console.log("Student", students);
console.log("Độ dài của mảng là", students.length);

// <--------------------->

// Mảng rỗng

const a = [];
console.log(a);
console.log(typeof a);

// Falsy: null, NaN, undefined, " ", 0.

// <--------------------->

// Lấy giá trị phần tử đầu tiên trong mảng

const cars_1 = cars[0];
console.log("Car 1: ", cars_1);
console.log("Car 2: ", cars[2]);

// <--------------------->

// Gán - thay thế phần tử trong mảng:
cars[0] = "Mazda";
console.log("Kiểm tra xe: ", cars);

// <--------------------->

// Tạo 1 mảng có chiều dài là 10
// Ví dụ 1:
const numbers = new Array(10);
console.log("Kiểm tra: ", numbers);
// Trả về Empty , empty thì có length, rỗng thì không có length

// Ví dụ 2:
const numbers_100 = [];
for (let i = 0; i < 100; i++) {
  numbers_100[i] = i + 1;
}
console.log("Kiểm tra mảng số", numbers_100);

// <--------------------->

// Làm việc với For - In, lấy được chỉ số của mảng --> Phù hợp dùng trong Object
const studentsName1 = new Array(
  "Minh",
  "Hạnh",
  "Thắng",
  "Nguyên",
  "Nương",
  "Hùng",
  "Tú",
  "Tài"
);
for (let index in studentsName1) {
  console.log("Học viên thứ: ", index, " có tên là ", studentsName1[index]);
}

// Làm việc với For - Of, lấy được phần tử trong mảng --> Phù hợp dùng trong mảng Array
const studentsName2 = new Array(
  "Minh",
  "Thắng",
  "Hạnh",
  "Tú",
  "Tài",
  "Nguyên",
  "Nương",
  "Hùng"
);

for (const student of studentsName2) {
  console.log("Kiểm tra học viên thứ", student);
}

// <--------------------->

// Các phương thức trong mảng
// CRUD ---> Create, Read, Update, Delete
const carsName = ["BMW", "Toyota", "Honda", "Vinfast"];

/**
   
* @create : push(): Thêm phần tử vào cuối, unshift(): Thêm phần tử vào đầu
* @read : for, for in, for of, array[i], 
* @update : splice(): , array[i] = value
* @delete : pop(): Xóa phần tử cuối , shift(): Xóa phần tử đầu, splice():
* Kiểu khác: splite(), split(): Chuyển đổi String theo Array theo Separator, join(): Chuyển Array thành String

*/

const lengthCarsName = carsName.push("Ford");
const lengthCarsName2 = carsName.unshift("Lexus");

console.log(
  "Kết quả sau khi push: ",
  carsName,
  "Độ dài của Cars Name là: ",
  lengthCarsName
);
console.log(
  "Kết quả sau khi unshift: ",
  carsName,
  "Độ dài của Cars Name là: ",
  lengthCarsName2
);

// Phương thức nối mảng --> concat()
const number_A = [1, 2, 3];
const number_B = [4, 5];
const number_C = number_A.concat(number_B);
console.log("Kiểm tra Number: ", number_C);

// Làm quen với mảng đa chiều --> Hai chiều

const location_1 = [
  [1, 2],
  [3, 4],
  [5, 6],
  [20, 10],
];

console.log("Kiểm tra: ", location_1[2][1], location_1[3][1]);
console.log(
  "Kiểm tra độ dài mảng 1: ",
  location_1[2].length,
  "\n",
  "Kiểm tra độ dài mảng 2: ",
  location_1.length
);
console.log("Kiểm tra mảng 2 chiều: ", location_1);

// Ví dụ:

const row = 5;
const col = 8;
const array_row = new Array(row);
const array_2 = [];

for (let m = 0; m < row; m++) {
  array_2[m] = [];
  for (let n = 0; n < col; n++) {
    const number = parseInt(Math.random() * 100);
    array_2[m][n] = number;
  }
}
console.log("Kiểm tra mảng 2 chiều ngẫu nhiên: ", array_2);
