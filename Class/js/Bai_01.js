// Script bài 1
function bai_01() {
  let value = +prompt("Nhập một số ");
  for (let k = 0; k <= value; k++) {
    if (k <= 1) {
      console.log("Khoong phai so nguyen to", k);
    }
    for (let i = 2; i <= k; i++) {
      if (k % i == 0) {
        console.log("Khong phai so nguyen to", k);
      }
    }
  }
}

// Script bài 3
function bai_03() {
  let N;
  let soNguyenTo = "Số nguyên tố";
  let soHoanHao = "Số hoàn hảo";
  let soChan = "Số chẵn";
  let soLe = "Số lẻ";
  do {
    N = +prompt("Nhập vào số N:");
    console.log(N);

    // Kiểm tra số chẳn và số lẻ
    if (N > 0) {
      if (N % 2 == 0) {
        soChan += " " + N;
      } else {
        soLe += " " + N;
      }

      // Kiểm tra số nguyên tố
      if (N > 1) {
        let isCheckPrime = true;
        for (let i = 2; i < N; i++) {
          if (N % i == 0) {
            isCheckPrime = false;
          }
        }

        if (isCheckPrime) {
          soNguyenTo += " " + N;
        }
      }

      // Kiểm tra số hoàn hảo
      let sum = 0;
      for (let i = 1; i <= N / 2; i++) {
        if (N % i == 0) {
          sum += i;
        }
      }
      if (sum == N) {
        soHoanHao += " " + N;
      }

      // do something...
    }
  } while (N > 0);
  document.write(soChan);
  document.write(soLe);
  document.write(soNguyenTo);
  document.write(soHoanHao);
}

// Script bài 4
function bai_04() {
  let sum = 0;
  let count = 0;
  for (let i = 0; count <= 30; i++) {
    if (i % 5 == 0) {
      sum = sum + i;
      count++;
      console.log(count, i);
    }
  }
  console.log(sum);
}

// Cách 2:
// let sum = 0;
// let count = 0;
// while (count < 30) {
//     if ( i % 5 ==0) {
//         sum +=i;
//         count++;
//     }
//     i++;
// }

// Script bài 5
// Dãy Fibonacci là: 0,1,1,2,3,5,8,13....
function bai_05() {
  let a = 0;
  let b = 1;
  let nextNumber;
  let count = 2;
  let sum = 0;

  while (count <= 20) {
    sum += a;
    nextNumber = a + b;
    console.log("nextNumber: ", nextNumber);
    a = b;
    b = nextNumber;
    console.log("a", a);
    console.log("b", b);
    count++;
  }
  console.log("Tổng 20 số đầu tiên cuẩ dãy Fibonacci: ", sum);
}

// Script bài 6
// HCN đặc
function bai_06() {
  // B1: Nhập được chiều dài và chiều rộng:
  const width = parseInt(prompt("Nhập chiều rộng hình chữ nhật: "));
  const height = parseInt(prompt("Nhập chiều cao hình chữ nhật: "));

  const resultElement = document.querySelector(".result-06");
  // B2: Dùng vòng lặp For để xác định nội dung hiển thị:

  let resultContent = " ";
  for (let row = 0; row < height; row++) {
    // Tạo 1 dòng
    resultContent += "<div>";
    for (let col = 0; col < width; col++) {
      // Tạo nội dung cho col
      resultContent += "*";
    }

    resultContent += "</div>";
  }
  resultElement.innerHTML = resultContent;
}

function bai_06_1() {
  // HCN rỗng
  // B1: Nhập được chiều dài và chiều rộng:
  const width = parseInt(prompt("Nhập chiều rộng hình chữ nhật: "));
  const height = parseInt(prompt("Nhập chiều cao hình chữ nhật: "));

  const resultElement = document.querySelector(".result-06-1");
  // B2: Dùng vòng lặp For để xác định nội dung hiển thị:

  let resultContent = " ";
  for (let row = 0; row < height; row++) {
    // Tạo 1 dòng
    resultContent += "<div>";
    for (let col = 0; col < width; col++) {
      // Tạo nội dung cho col
      if (row == 0 || row == height - 1 || col == 0 || col == width - 1) {
        resultContent += "*";
      } else {
        resultContent += "&nbsp;&nbsp;";
      }
    }
    resultContent += "</div>";
  }
  resultElement.innerHTML = resultContent;
}

// Script bài 7
function bai_07() {
  // B1: Nhập được chiều dài và chiều rộng:
  const resultElement = document.querySelector(".result-07");
  const height = 5;
  const width = 6;
  // B2: Dùng vòng lặp For để xác định nội dung hiển thị:

  let resultContent = " ";
  for (let row = 0; row <= height; row++) {
    // Tạo 1 dòng
    resultContent += "<div>";
    for (let col = 0; col <= width; col++) {
      // Tạo nội dung cho col
      if ((row == 0 && col % 3 !== 0) || (row == 1 && col % 3 === 0)) {
        resultContent += "*";
      } else if (row + col == 8 || row - col == 2) {
        resultContent += "*";
      } else {
        resultContent += "&nbsp;&nbsp;";
      }
    }
    resultContent += "</div>";
  }
  resultElement.innerHTML = resultContent;
}

// Script bài 8
function bai_08() {
  const r = Number(prompt("Nhập bán kính hình tròn: "));
  const resultElement = document.querySelector(".result-08");
  resultElement.style.width = r + "px";
  resultElement.style.height = r + "px";
  resultElement.style.backgroundColor = "red";
  resultElement.style.borderRadius = "50%";
}

// Script bài 9
// Tam giác đặc
function bai_09() {
  let height = +prompt("Nhập chiều cao của tam giác: ");
  for (let col = 1; col <= height; col++) {
    let result = "";
    for (let space = 1; space <= height - col; space++) {
      result += " ";
    }
    for (let row = 1; row < col * 2; row++) {
      result += "*";
    }
    console.log(result);
  }

  const resultElement = document.querySelector(".result-09");
}

// Script bài 9.1
// Tam giác rỗng
function bai_09_1() {
  let height = +prompt("Nhập chiều cao của tam giác: ");
  for (let col = 1; col <= height; col++) {
    let result = "";
    for (let space = 1; space <= height - col; space++) {
      result += " ";
    }
    for (let row = 1; row < col * 2; row++) {
      result += "*";
    }
    console.log(result);
  }

  const resultElement = document.querySelector(".result-09-1");
}

// Script bài 10
function bai_10() {
  let resultContent = "";
  for (let row = 1; row <= 9; row++) {
    resultContent += "<tr>";
    for (let col = 1; col <= 9; col++) {
      resultContent += `<td> ${col} x ${row} = ${row * col} </td>`;
      console.log(resultContent);
    }
    resultContent += "</tr>";
  }
  const resultElement = document.querySelector(".result-10");
  resultElement.innerHTML = resultContent;
}

// Script bài 11
function bai_11() {
  const text = prompt("Nhập vào 1 chữ bất kỳ: ");
  const textWords = text.split("");
  const textReverse = textWords.reverse();
  const textSentences = textReverse.join("");

  const resultElement = document.querySelector(".result-11");
  resultElement.innerHTML = textSentences;
}

// Script bài 12
function bai_12() {
  const soThuNhat = parseInt(prompt("Nhập vào số nguyên thứ 1: "));
  const soThuHai = parseInt(prompt("Nhập vào số nguyên thứ 2: "));
  const soThuBa = parseInt(prompt("Nhập vào số nguyên thứ 3: "));
  const soThuTu = parseInt(prompt("Nhập vào số nguyên thứ 4: "));
  const soThuNam = parseInt(prompt("Nhập vào số nguyên thứ 5: "));

  let max = soThuNhat;

  if (max < soThuHai) {
    max = soThuHai;
  }

  if (max < soThuBa) {
    max = soThuBa;
  }

  if (max < soThuTu) {
    max = soThuTu;
  }

  if (max < soThuNam) {
    max = soThuNam;
  }

  const numbers = [soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam];
  numbers.sort(function (a, b) {
    return b - a;
  });

  const resultElement = document.querySelector(".result-12");
  resultElement.innerHTML =
    "Số thứ nhất là: " +
    soThuNhat +
    "<br>" +
    "Số thứ hai là: " +
    soThuHai +
    "<br>" +
    "Số thứ ba là: " +
    soThuBa +
    "<br>" +
    "Số thứ tư là: " +
    soThuTu +
    "<br>" +
    "Số thứ năm là: " +
    soThuNam +
    "<br>" +
    "Max là số: " +
    max +
    "<br>" +
    "Dãy số theo thứ tự giảm dần là: " +
    numbers;
}

// Script bài 13
function bai_13() {
  const N = Number(prompt("Nhập vào số N: "));
  let uoc = "";
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      uoc += i + ", ";
      console.log(uoc);
    }
  }
  console.log("Các ước của", N, "là:");

  const resultElement = document.querySelector(".result-13");
  resultElement.innerHTML = "Các ước của " + N + " là: " + uoc;
}
