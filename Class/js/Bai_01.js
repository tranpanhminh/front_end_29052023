// Script bài 1
function bai_01() {
var N = parseInt(prompt("Nhập giá trị N:"));

while (N < 2 || N > 100) {
  N = parseInt(prompt("Giá trị N không hợp lệ. Vui lòng nhập lại:"));
}

for (var i = 2; i <= N; i++) {
  if (i % 2 === 0) {
    var square = i * i;

  }
}
    const resultElement = document.querySelector(".result-01");
    resultElement.innerHTML = `Bình phương của số tự nhiên từ 0 đến ${N} là: ${square}`;
}

// <-------------------->
// Script bài 2
function bai_02() {
    var N = parseInt(prompt("Nhập giá trị N:"));

    while (N < 2 || N > 100) {
    N = parseInt(prompt("Giá trị N không hợp lệ. Vui lòng nhập lại:"));
    }     

    for (var i = 2; i <= N; i += 2) {
    var square = i * i;
    console.log("Bình phương của " + i + " là: " + square);
    }

}