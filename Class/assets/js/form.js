// Tạo mảng
let listAccounts = [];

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
