// Tạo mảng
let listAccounts = [];

// Script Signup
// Function signup
function handleSignUp() {
  let inputEmail = document.querySelector(".input-email").value;
  let inputPassword = document.querySelector(".input-password").value;
  let inputRePassword = document.querySelector(".input-repassword").value;
  console.log(inputEmail, inputPassword, inputRePassword);

  let account = "";
  if (inputEmail == "" || inputPassword == "" || inputRePassword == "") {
    alert("Hãy điền thông tin vào Form!");
    return;
  }

  for (let i = 0; i < listAccounts.length; i++) {
    if (inputEmail === listAccounts[i].email) {
      alert("Email đã được đăng ký hãy nhập lại!");
      return;
    }
  }

  if (inputPassword == inputRePassword) {
    account = {
      id: listAccounts.length + 1,
      email: inputEmail,
      password: inputPassword,
      rePassword: inputRePassword,
    };
  } else {
    alert("Mật khẩu không trùng nhau hãy nhập lại");
  }

  document.querySelector(".input-email").value = "";
  document.querySelector(".input-password").value = "";
  document.querySelector(".input-repassword").value = "";

  listAccounts.push(account);
  console.log(listAccounts);
}

// <------------------------>
// Script Login
function handleLogin() {
  let inputLoginEmail = document.querySelector(".input-login-email").value;
  console.log(inputLoginEmail);
  let inputLoginPassword = document.querySelector(
    ".input-login-password"
  ).value;
  console.log(inputLoginPassword);

  if (inputLoginEmail == "" || inputLoginPassword == "") {
    alert("Hãy điền thông tin vào Form!");
    return;
  }

  let isEmailExist = false;
  let isLoggedIn = false;

  for (let i = 0; i < listAccounts.length; i++) {
    if (inputLoginEmail === listAccounts[i].email) {
      isEmailExist = true;
      if (inputLoginPassword === listAccounts[i].password) {
        isLoggedIn = true;
        break;
      } else {
        alert("Sai Password! Hãy nhập lại!");
        return;
      }
    }
  }

  if (isEmailExist == false) {
    alert(`Email ${inputLoginEmail} không tồn tại!`);
  } else {
    if (isLoggedIn) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Sai Password! Hãy nhập lại!");
    }
  }
}
