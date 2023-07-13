// Script bài 1
let accounts = [];
function Accounts(email, username, password) {
  this.email = email;
  this.username = username;
  this.password = password;
}
function bai_01() {
  let inputEmail = prompt("Nhập vào Email: ");
  let inputUsername = prompt("Nhập vào Username: ");
  let inputPassword = prompt("Nhập vào Pasword: ");

  let account = {
    email: inputEmail,
    username: inputUsername,
    password: inputPassword,
  };
  accounts.push(account);
  console.log(accounts);

  // Chuyển thành JSON
  const accountsToJSON = JSON.stringify(accounts);
  console.log("Kiểm tra JSON", accountsToJSON);

  // Gửi lên Local Storage
  localStorage.setItem("userAccount", accountsToJSON);
}

function getUserAccount() {
  const userAccount = JSON.parse(localStorage.getItem("userAccount"));
  console.log("Kiểm tra userAccount", userAccount);
}

function deleteData() {
  const key = prompt("Bạn muốn xóa gì?");
  localStorage.removeItem(key);
}

function deleteAllData() {
  // Xác nhận người dùng muốn xóa hay không
  const isDelete = confirm("Bạn có chắc chắn xóa?");
  if (isDelete) {
    localStorage.clear();
  }
}

// <---------------------------> //

// Function bài 2
function bai_02() {
  sessionStorage.setItem("name", JSON.stringify("Hello Session"));
}

function getDataSession() {
  const data = sessionStorage.getItem("name");
  console.log("Kiểm tra Data", data);
}

// <---------------------------> //

// Function bài 3
// Add User
function bai_03_add_user() {
  // B1: Lấy thông tin username
  const inputElement = document.querySelector("input[type='text']");
  const userNameValue = inputElement.value;

  // Trước khi Set thì phải Stringify, Chuyển thành JSON
  const userNameConvertJSON = JSON.stringify(userNameValue);

  // B2: Thêm vào Session Storage
  sessionStorage.setItem("username", userNameConvertJSON);

  // Xóa Value trong ô Input
  inputElement.value = "";

  // Render lại dữ liệu
  bai_03_render_user();
}

// Xóa User
function bai_03_delete_user() {
  sessionStorage.removeItem("username");

  // Render lại dữ liệu
  bai_03_render_user();
}

// Lấy dữ liệu từ Session Storage để Render ra
function bai_03_render_user() {
  // Lấy dữ liệu từ Session Storage
  // Đặt 1 biến để hứng
  const data = sessionStorage.getItem("username");
  console.log("Check hứng dữ liệu: ", data);

  // Chuyển từ JSON thành dữ liệu thường
  const username = JSON.parse(data);

  // Trỏ tới Element result-03 để hiển thị
  const resultElement = document.querySelector(".result-03");

  // Gán lại là kết quả
  resultElement.innerHTML = username;
}

// <---------------------------> //

// Function bài 4
function bai_04_get_cookie() {
  const cookieData = document.cookie;
  console.log("Kiểm tra Cookie", cookieData);
}

function bai_04_set_cookie() {
  const today = new Date("2024-07-04").toUTCString();
  console.log(today);
  document.cookie = `token=1241123213123123;expires=${today}`;
  document.cookie = "username=adsada";
  console.log("Kiểm tra Cookie", document.cookie);
}
