// Script bài 1
// Cho 1 mảng
function bai_01() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(array);

  //   Vòng lặp thứ 1
  let result = [];
  let ketQua = "";
  for (let i = 1; i < array.length; i++) {
    // let j = i + 1 để loại bỏ đi các cặp số phía sau mà tổng của nó bằng cặp số phía trước ví dụ: 1,9 và 9,1
    for (let j = i + 1; j < array.length; j++) {
      if (i + j === 10) {
        result.push([i, j]);
        ketQua = [i, j];
        console.log(ketQua);
        console.log(result);
      }
    }
  }

  const resultElement = document.querySelector(".result-01");
  resultElement.innerHTML = `Kết quả các cặp số là: ${result.join(" - ")}`;
}

// Script bài 1.2
function bai_01_2() {}

// Script bài 2
function bai_02_01() {
  let inputText = document.querySelector("#input-text").value;
  console.log(inputText);

  for (let i = 0; i < inputText.length; i++) {
    let count = 0;
    for (let j = 0; j < inputText.length; j++) {
      if (inputText[i] == inputText[j]) {
        count++;
      }
    }
    console.log(`Chữ ${inputText[i]} xuất hiện ${count} lần`);
  }
}

function bai_02_02() {
  const text = prompt("Nhập vào 1 chuỗi số");
  const convertArray = text.split("");
  console.log(1111, convertArray);
  let result = "";
  for (let i = 0; i < convertArray.length; i++) {
    let count = 1;
    for (let m = i + 1; m < convertArray.length; m++) {
      if (convertArray[i] === convertArray[m]) {
        count++;
        convertArray.splice(m, 1); // Xóa phần tử trùng nhau --> Không cần đếm lại trong vòng lặp
        m--; // Khi array giảm xuống -> m phải giảm theo để không sót phần tử
      }
    }

    console.log("Ký tự: ", convertArray[i], " được lặp ", count);
    result += `<p><strong>Ký tự ${convertArray[i]}</strong> được lặp lại ${count} lần </p>`;
  }
  console.log(1111, convertArray);
  const resultElement = document.querySelector(".result-02");
  resultElement.innerHTML = result;
}

// Script bài 3
// Cách 1:
function bai_03_01() {
  const numberString = prompt("Nhập 1 chuỗi số ngăn cách nhau bởi dấu phẩy: ");
  const convertArray = numberString.split(",");
  const newData = convertArray.map((number) => Number(number));
  for (let i = 0; i < newData.length; i++) {
    for (let m = 0; m < newData.length; m++) {
      if (newData[m] > newData[m + 1]) {
        const x = newData[m];
        newData[m] = newData[m + 1];
        newData[m + 1] = x;
      }
    }
  }
  console.log(newData);
}

// Cách 2:
function bai_03_02() {
  let inputNumber = document.querySelector("#input-number").value;
  let convertArray = inputNumber.split(",");
  console.log(convertArray);

  sortArray = convertArray.sort(function (a, b) {
    return a - b;
  });
  console.log(sortArray);

  const resultElement = document.querySelector(".result-03");
  resultElement.innerHTML = sortArray;
}

// Script bài 4

