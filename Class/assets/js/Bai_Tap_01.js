// Khởi tạo
function bai_01() {
  const widthValue = Number(prompt("Nhập chiều dài: "));
  const heightValue = Number(prompt("Nhập chiều cao: "));
  const colorValue = prompt("Nhập màu nền: ");
  const hcn_01 = new Rectangle(widthValue, heightValue);
  console.log("Thuộc tính HCN 01: ", hcn_01);
  console.log("Chu vi HCN 01 là: ", hcn_01.getPerimeter());
  console.log("Diện tích HCN 01 là: ", hcn_01.getArea());

  let resultElement = document.querySelector(".result");
  resultElement.innerHTML = `Chu vi HCN 01 là: ${hcn_01.getPerimeter()} <br> Diện tích HCN 01 là: ${hcn_01.getArea()} <br><br>`;

  let printElement = document.querySelector(".result-01");
  printElement.style.backgroundColor = colorValue;
  printElement.style.width = widthValue + "px";
  printElement.style.height = heightValue + "px";
}

function Rectangle(width, height, color) {
  // Khai báo thuộc tính
  this.width = width;
  this.height = height;
  this.color = color;

  // Khai báo hành vi
  this.getArea = function () {
    return this.width * this.height;
  };
  this.getPerimeter = function () {
    return (this.width + this.height) * 2;
  };
}
