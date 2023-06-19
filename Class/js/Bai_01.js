// Script bài 1
function bai_01() {
var N = parseInt(prompt("Nhập giá trị N:"));

while (N < 2 || N > 100) {
  N = parseInt(prompt("Giá trị N không hợp lệ. Vui lòng nhập lại:"));
}

for (let i = 2; i <= N; i++) {
  if (i % 2 === 0) {
    var square = i * i;

  }
}
    const resultElement = document.querySelector(".result-01");
    resultElement.innerHTML = `Bình phương của số tự nhiên từ 2 đến ${N} là: ${square}`;
}

// <-------------------->
// Script bài 2
function bai_02() {
    var N = parseInt(prompt("Nhập giá trị N:"));

    while (N < 2 || N > 100) {
    N = parseInt(prompt("Giá trị N không hợp lệ. Vui lòng nhập lại:"));
    }     

    for (let i = 2; i <= N; i += 2) {
    var square = i * i;
    }
    const resultElement = document.querySelector(".result-02");
    resultElement.innerHTML = `Bình phương của số chẵn từ 2 đến ${N} là: ${square}`;
}

// <-------------------->
// Script bài 3

// Bước 1: Tạo được màu sắc random

function bai_03() {

    for (let i = 0; i < 10; i++) {
    // Bước 1.1: Xác định bảng mã màu là RGB() và tạo random từng thành phần
    // Chuyển các giá trị thành số nguyên Parseint() hoặc Math.floor -> Làm tròn số
    const r = parseInt(Math.random()*255);
    const g = parseInt(Math.random()*255);
    const b = parseInt(Math.random()*255);

    // Bước 1.2: Có được màu sắc random

    const color = `rgb(${r},${g},${b})`

    // Bước 2: Tạo console.log() đổi màu
    console.log("%cMàu sắc đã được thay đổi!", `color: ${color}`);

    // --> Tạo được 1 console.log() đổi màu
}
}

// <-------------------->
// Script bài 4
function bai_04() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
}

// <-------------------->
// Script bài 5
function bai_05() {
    // B1: Nhập số
    const N = Number(prompt("Nhập vào số muốn kiểm tra: "));
    const resultElement = document.querySelector(".result-05")
    
    // B2: Tạm thời gán đó là số nguyên tố
    let isPrime = true;

    // B3: Kiểm tra điều kiện number
    if (N < 2) {
        alert("Số đã nhập không phải số nguyên tố!");
        return;
    }

    // B4: Chạy vòng lặp để kiểm tra
    for(let i = 2; i < N; i++) {
        if(N%i==0) {
            isPrime = false;
        }
    }

    if (isPrime) { // Nếu isPrime bằng true
        resultElement.innerHTML =`Số ${N} là số nguyên tố`
    } else {
        resultElement.innerHTML =`Số ${N} không phải là số nguyên tố`
    }
}

// <-------------------->
// Script bài 6
function bai_06() {
    let N = Number(prompt("Nhập số cần kiểm tra: "));
    let sum = 0;
    for (let i=1; i < N; i++) {
        if ((N % i == 0)) {
            sum = sum + i;
    }
    if (sum == N) {
        alert("Là số hoàn hảo!");
    } else {
        alert("Không phải số hoàn hảo!");
    }
}
const resultElement = document.querySelector(".result-06");

}

// <-------------------->
// Script bài 7
function bai_07() {
// B1:
  let N = 1;
  let m =0;
  let count = 0;

// B2: Đặt biến để lưu kết quả số hoàn hảo
let perfectNumbers = "";
// B5: Check tất cả số tăng dần có phải số hoàn hảo hay không -> Count = 5

while (count < 4) {
// B3: Xác định một số hoàn hảo
let sum = 0;
for (let i = 1; i <= N/2 ; i++) {
  if (N%i===0) {
    sum +=i;
  }
}
// B4: Xác định số hoàn hảo và lưu nó lại,
if (sum === N) {
  perfectNumbers += N + "";
  count++;
}
N++;
m++;
}


console.log ("Kiểm tra số lần lặp", m)
console resultElement = document.querySelector(".result-07");
resultElement.innerHTML = perfectNumbers;

}