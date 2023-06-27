// Script bài 1
const person = {
  firstName: "Nguyễn Văn",
  lastName: "Bình",
};

function bai_01() {
  console.log("Full Name ban đầu: ", person);

  // Câu b: Thay đổi giá trị Last Name là Hòa
  person.lastName = "Hòa";
  console.log("Full Name sau khi thay đổi: ", person);

  // Câu c: Xóa thuộc tính Last Name khỏi đối tượng
  delete person.lastName;
  console.log("Full Name sau khi thay đổi: ", person);
}

// <---------------->

// Script bài 2

function bai_02() {
  const obj = { name: "ABC" };
  const isEmpty = checkEmpty(obj);
  console.log(
    isEmpty ? " Object không có thuộc tính " : "Object có thuộc tính"
  );
  checkEmpty_02(obj);
}

function checkEmpty(obj) {
  let isEmpty = true;
  for (const key in obj) {
    console.log("Key", key);
    isEmpty = false;
  }
  return isEmpty;
}

function checkEmpty_02(obj) {
  const keys = Object.keys();
  // console.log("Check: ", keys);
  // if (keys.length) {
  //   return false;
  // } else {
  //   return true;
  // }
  return !keys.length;
}

// <---------------->

// Script bài 4
function bai_04() {
  let widthValue = Number(prompt("Nhập giá trị Width: "));
  let heightValue = Number(prompt("Nhập giá trị Width: "));
  let titleValue = prompt("Nhập giá trị Title: ");

  let menu = new Menu(widthValue, heightValue, titleValue);
  console.log("Nhân 2 giá trị Number của 2 số mới là: ", menu.getMul());

  let newWidthValue = Number(prompt("Nhập giá trị Width mới: "));
  let newHeightValue = Number(prompt("Nhập giá trị Height mới: "));

  menu.setWidth(newWidthValue);
  menu.setWidth(newHeightValue);
  menu.printer();
}
function Menu(width, height, title) {
  this.width = width;
  this.height = height;
  this.title = title;

  this.getMul = function () {
    return this.width * this.height;
  };

  this.setWidth = function (newWidth) {
    this.width = newWidth;
  };
  this.setHeight = function (newHeight) {
    this.width = newHeight;
  };
  this.getWidth = function () {
    return this.width;
  };
  this.getHeight = function () {
    return this.height;
  };
  this.printer = () => {
    console.log("Nhân 2 giá trị Number là: ", this.getMul());
  };
}
