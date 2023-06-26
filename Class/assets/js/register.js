const accounts = [];
// Cách 1: Cách xử lý Register bằng for
function handleRegister() {
  // B1: Lấy dữ liệu từ Form
  const user = getDataForm();

  //   repeat password --> Để chắc chắn rằng người dùng đã nhớ password mình muốn đặt

  if (user.password !== user.repeatPassword) {
    alert("Password phải trùng nhau");
    return;
  }
  // B2: Kiểm tra rằng Email có tồn tại trong mảng dữ liệu (dataBase) hay không

  //   Dùng vòng lặp lặp qua từng phần tử để so sánh --> For, for of, forEach, find()

  let isExist = false;
  for (let i = 0; i < accounts.length; i++) {
    if (user.email === accounts[i].email) {
      isExist = true;
      break; // Rút ngắn lần lặp
    }
  }

  if (isExist) {
    alert(`Email ${user.email} đã được đăng ký`);
  } else {
    // Delete Key không cần thiết --> repeatPassword
    delete user.rePasswordValue;
    accounts.push(user);
    alert("Đăng ký thành công!");
  }

  //   Nếu trùng lặp Email --> thông báo Email đã tồn tại -> Yêu cầu đăng nhập hoặc đăng ký Email mới

  //   Nếu Email không tồn tại --> Push vào mảng Accounts --> Điều hướng sang đăng nhập
}

// Cách 2: Xử lý Register bằng forEach
function handleRegister2() {
  // B1: Lấy dữ liệu từ Form
  const user = getDataForm();

  //   repeat password --> Để chắc chắn rằng người dùng đã nhớ password mình muốn đặt

  if (user.password !== user.repeatPassword) {
    alert("Password phải trùng nhau");
    return;
  }
  // B2: Kiểm tra rằng Email có tồn tại trong mảng dữ liệu (dataBase) hay không

  //   Dùng vòng lặp lặp qua từng phần tử để so sánh --> For, for of, forEach, find()

  let isExist = false;
  accounts.forEach((item) => {
    if (item.email == user.email) {
      isExist = true;
      return;
    }
    console.log("Hello World");
  });

  if (isExist) {
    alert(`Email ${user.email} đã được đăng ký`);
  } else {
    // Delete Key không cần thiết --> repeatPassword
    delete user.rePasswordValue;
    accounts.push(user);
    alert("Đăng ký thành công!");
  }

  //   Nếu trùng lặp Email --> thông báo Email đã tồn tại -> Yêu cầu đăng nhập hoặc đăng ký Email mới

  //   Nếu Email không tồn tại --> Push vào mảng Accounts --> Điều hướng sang đăng nhập
}

// Cách 3: Xử lý Register bằng find()
function handleRegister3() {
  // B1: Lấy dữ liệu từ Form
  const user = getDataForm();

  //   repeat password --> Để chắc chắn rằng người dùng đã nhớ password mình muốn đặt

  if (user.password !== user.repeatPassword) {
    alert("Password phải trùng nhau");
    return;
  }
  // B2: Kiểm tra rằng Email có tồn tại trong mảng dữ liệu (dataBase) hay không

  //   Dùng vòng lặp lặp qua từng phần tử để so sánh --> For, for of, forEach, find()

  const userExist = accounts.find((item) => {
    // item.email === user.email
    if (item.email === user.email) {
      return true;
    }
  });

  if (userExist) {
    alert(`Email ${user.email} đã được đăng ký`);
  } else {
    // Delete Key không cần thiết --> repeatPassword
    delete user.rePasswordValue;
    accounts.push(user);
    alert("Đăng ký thành công!");
  }

  //   Nếu trùng lặp Email --> thông báo Email đã tồn tại -> Yêu cầu đăng nhập hoặc đăng ký Email mới

  //   Nếu Email không tồn tại --> Push vào mảng Accounts --> Điều hướng sang đăng nhập
}

// Lấy dữ liệu trong Form
function getDataForm() {
  const emailValue = document.querySelector("#email").value;
  const userNameValue = document.querySelector("#username").value;
  const passwordValue = document.querySelector("#password").value;
  const rePasswordValue = document.querySelector("#re-password").value;

  // Lấy dữ liệu từ ô Input
  return {
    email: emailValue,
    userName: userNameValue,
    password: passwordValue,
    repeatPassword: rePasswordValue,
  };
}
