// Xây dựng đối tượng
function Temperature(degreeC) {
  this.degreeC = degreeC;

  // Khai báo hành vi
  this.toDegreeF = function () {
    return (degreeC * 9) / 5 + 32;
  };

  this.toDegreeKenvin = function () {
    return degreeC + 273.15;
  };

  // Set lại độ C
  this.setNewDegreeC = (degreeC) => {
    this.degreeC = degreeC;
  };

  // Print Console
  this.printer = () => {
    console.log("Độ C sang độ F là: ", this.toDegreeF());
    console.log("Độ C sang độ Kenvin là: ", this.toDegreeKenvin());
  };
}

function bai_tap() {
  const degreeCValue = Number(prompt("Nhập độ C muốn đổi: "));
  const result = new Temperature(degreeCValue);
  console.log("Temparature: ", result);
  console.log(degreeCValue, " độ C sang độ F là:", result.toDegreeF());
  console.log(degreeCValue, " độ C sang độ Kevin là:", result.toDegreeKenvin());

  const setNewDegreeC = Number(prompt("Nhập vào độ C mới: "));
  result.setNewDegreeC(setNewDegreeC);
  result.printer();
}
