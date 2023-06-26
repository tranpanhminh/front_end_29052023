const person = {
  name: "Nguyễn Văn A",
  age: 18,
  address: "Đà Nẵng",
  dob: "12-10-2005",
  gender: "0",
};

// Key: Viết thường, viết liền (Giống biến)
// Value: string, number, array, function, object

/**
 * Cách 1: person.name
 *
 * Cách 2:
 * const key = "name";
 * person[key];
 */

// <---------------------------> //

/** Khi nào dùng Array, khi nào dùng Object
 * Dùng Array khi muốn tạo đối tượng chứa các đối tượng có cùng giá trị, cùng tính chất.
 * Dùng Object khi muốn tạo đối tượng, thêm thông tin, phục vụ cho đối tượng đó.
 * */

console.log("Kiểm tra đối tượng:", person);
console.log("Kiểm tra kiểu dữ liệu 1:", typeof person);

console.log("Kiểm tra tên đối tượng", person.name);
console.log("Kiểm tra kiểu dữ liệu 2:", typeof person.name);

console.log("Cách 2: Kiểm tra đối tượng:", person["name"]);
console.log("Kiểm tra kiểu dữ liệu 3:", typeof person["name"]);

// <---------------------------> //

// Dùng For in để lấy từng key của Object
for (const key in person) {
  console.log("Check key:", key);
  console.log("Check value of key:", person[key]); // Khi muốn lấy 1 giá trị theo tên thuộc tính --> Tên thuộc tính là 1 biến.
  console.log("Kiểm tra kiểu dữ liệu 3:", typeof key);
  console.log("Kiểm tra kiểu dữ liệu 4:", typeof person[key]);
}

// <---------------------------> //

// Object là kiểu dữ liệu tham chiếu
const person2 = person;
person2.name = "Trần Thị A";

console.log(person2, person);
console.log(person2.name + " và " + person.name);

// <---------------------------> //

// spread --> Copy nội dung của Object, Array
const person3 = { ...person };
console.log(person3);
person3.name = "Nguyễn Văn A";
console.log("Person 3.Name là: ", person3.name);
console.log("Person.Name là: ", person.name);

// Hoặc copy Array
const number = [1, 2, 3, 4, 5, 6];
console.log("Number gốc: ", number);
const copyNumber = [...number];
console.log("Number copy: ", copyNumber);
copyNumber[0] = 100;
console.log("Number copy chỉnh sửa: ", copyNumber);

const animals = [
  {
    id: 1,
    name: "Kitty",
    weight: 2,
    gender: true,
    type: "cat",
  },
  {
    id: 2,
    name: "Cún con",
    weight: 5,
    gender: false,
    type: "dog",
  },
];

const cat = animals[0];
cat.name = "Hello Kitty";

const cat2 = animals[1];
cat2.type = "A Cat";
console.log(cat2);
const animals2 = [...animals];
console.log(animals2);


// Dùng JSON
const animals3 = JSON.parse(JSON.stringify(animals));
animals3[1].name = "BIg Dog";
console.log(animals, animals3);
