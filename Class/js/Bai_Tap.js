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
