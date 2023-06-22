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
function bai_03() {}
