// Script bài 1
// Kiểm tra 1 số có phải số nguyên tố hay không?
function bai_01() {
  // Bước 1: Lấy được dữ liệu
  const inputValue = document.querySelector("#input-01").value;
  // Bước 2: Xử lý dữ liệu để có thể lấy được từng số
  const convertArray = inputValue.split(",");
  console.log(convertArray);

  // Bước 3: Dùng vòng lặp for để kiểm tra và lưu kết quả:
  let result = "";
  for (let i = 0; i < convertArray.length; i++) {
    const checkisPrime = isPrime(convertArray[i]);
    if (checkisPrime) {
      // Số nguyên tốt sẽ được thêm vào kết quả
      result += convertArray[i] + " ";
    }
  }
  const resultElement = document.querySelector(".result-01");
  resultElement.innerHTML = "Các số nguyên tố là: " + result;
}

function isPrime(number) {
  // let checkPrime = true;
  //   Kiểm tra có phải số hay không?
  if (isNaN(number)) {
    return false;
  }

  if (number < 2) {
    return false; // --> Các số bé hơn 2 không phải nguyên tố
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      //checkPrime = false;
      return false; // --> Có ước --> Không phải số nguyên tố
    }
  }
  //return checkPrime
  return true;
}

// Script bài 2
// Version 1
function bai_02_01() {
  const feetNumber = document.querySelector("#feet-value-01").value;
  console.log("Feet Number vừa nhập là: ", feetNumber);

  const resultMeter = feetNumber * 3.279;
  console.log("Đổi sang Meter là: ", resultMeter);

  const resultMeterElement = document.querySelector("#meter-value-01");
  console.log(resultMeterElement);
  resultMeterElement.value = resultMeter;
}

// Version 2
function bai_02_02() {
  // Lấy giá trị từ ô nhập
  const getNumber = document.querySelector("#first-value-02").value;
  console.log("Số vừa nhập là: ", getNumber);

  // Lấy giá trị từ Select
  const fromValue = document.querySelector("#from-value").value;
  const toValue = document.querySelector("#to-value").value;

  // Đối chiếu Value
  let convertNumber = "";
  if (fromValue === "meter" && toValue === "feet") {
    convertNumber = (getNumber / 0.3048).toFixed(2);
  } else if (fromValue === "feet" && toValue === "meter") {
    convertNumber = (getNumber * 0.3048).toFixed(2);
  } else {
    alert("Không thể chuyển đổi, hãy nhập lại!");
  }

  // In kết quả
  const resultElement = document.querySelector("#second-value-02");
  resultElement.value = convertNumber;

  // In kết quả ra bảng
  let resultTable = document.querySelector("#result-table");
  console.log(resultTable);
  let resultTableData = "";
}

// Script bài 3
function bai_03() {
  // Bước 1: Nhập vào giá trị N
  const N = Number(prompt("Nhập vào N: "));

  // Bước 2:
  // XỬ lý và vẽ hình tròn
  const circleElement = document.querySelector(".hinh-tron");
  circleElement.style.width = N + "px";
  circleElement.style.height = N + "px";
  circleElement.style.backgroundColor = "red";
  circleElement.style.borderRadius = "50%";

  // Xử lý và vẽ hình vuông
  const squareElement = document.querySelector(".hinh-vuong");
  squareElement.style.width = N + "px";
  squareElement.style.height = N + "px";
  squareElement.style.backgroundColor = "gray";

  // Xử lý và vẽ hình chữ nhật
  const rectangleElement = document.querySelector(".hinh-chu-nhat");
  rectangleElement.style.width = 3 * N + "px";
  rectangleElement.style.height = N + "px";
  rectangleElement.style.backgroundColor = "green";
}

// Script bài 4
