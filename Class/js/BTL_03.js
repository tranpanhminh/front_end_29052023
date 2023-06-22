// Script bài 1
function bai_01() {
  let number = document.querySelector("#input-number").value;
  console.log("Số vừa nhập là: ", number);

  let outputNumber = document.querySelector("#output-number");
  squareNumber = number * number;
  console.log(squareNumber);

  outputNumber.value = squareNumber;
}

// Script bài 2
function bai_02_circle_square() {
  let inputCircleRadius1 = document.querySelector(
    "#input-circle-radius-01"
  ).value;
  console.log("Bán kính vừa nhập là: ", inputCircleRadius1);

  let outputCircleSquare = document.querySelector("#output-circle-square");
  let circleSquare = (inputCircleRadius1 * 2 * Math.PI).toFixed(3);

  outputCircleSquare.value = circleSquare;
}

function bai_02_circle_perimeter() {
  let inputCircleRadius2 = document.querySelector(
    "#input-circle-radius-02"
  ).value;
  console.log("Bán kính vừa nhập là: ", inputCircleRadius2);

  let outputCirclePerimeter = document.querySelector(
    "#output-circle-perimeter"
  );
  let circlePerimeter = (2 * Math.PI * inputCircleRadius2).toFixed(3);
  outputCirclePerimeter.value = circlePerimeter;
}

// Script bài 3
function bai_03() {
  let inputFactorialNumber = document.querySelector(
    "#inputFactorialNumber"
  ).value;
  console.log("Số giai thừa vừa nhập là: ", inputFactorialNumber);

  let outputFactorialNumber = document.querySelector("#outputFactorialNumber");

  if (inputFactorialNumber == 0 || inputFactorialNumber == 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 1; i <= inputFactorialNumber; i++) {
    factorial *= i;
  }
  console.log(factorial);

  outputFactorialNumber.value = factorial;
}

// Script bài 4
function bai_04() {
  // Lấy giá trị nhập vào
  let inputText = document.querySelector("#inputText").value;
  console.log("Ký tự vừa nhập là: ", inputText);

  let result = "";
  if (isNaN(inputText - 1)) {
    result = "Không phải là ký tự số";
  } else {
    result = "Là ký tự số";
  }
  console.log(result);

  let outputCheckType = document.querySelector("#outputCheckType");
  outputCheckType.value = inputText + " " + result;
}

// Script bài 5
function bai_05() {
  let inputNumber = document.querySelector("#input-05").value;
  let arrayNumber = inputNumber.split(",").map(Number);
  console.log(arrayNumber);
  let minNumber = Math.min(...arrayNumber);
  let outputNumber = document.querySelector("#output-05");
  outputNumber.value = minNumber;
}

// Script bài 6
function bai_06() {
  const input06 = document.querySelector("#input-06").value;
  console.log(input06);

  result = "";
  if (input06 > 0) {
    result += "Là số nguyên dương";
  } else if (input06 < 0) {
    result += "Là số nguyên âm";
  } else {
    result += "Hãy nhập lại";
  }

  const output06 = document.querySelector("#output-06");
  output06.value =
    input06 > 0
      ? input06 + " " + result
      : input06 < 0
      ? input06 + " " + result
      : result;
}
