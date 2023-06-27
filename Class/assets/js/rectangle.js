// Xây dựng 1 class đối tượng hình chữ nhật
class Rectangle {
  // Hàm tạo các thuộc tính
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Có các phương thức với đối tượng (Khai báo hành vi)
  // Tính diện tích
  getArea() {
    return this.width * this.height;
  }

  // Tính chủ vi
  getPerimeter = () => {
    return (this.width + this.height) * 2;
  };

  // Set lại kích thước
  setHeight = function (height) {
    this.height = height;
  };
  setWidth = (width) => {
    this.width = width;
  };

  // Print Console
  printer = () => {
    console.log("Diện tích hình chữ nhật là: ", this.getArea());
    console.log("Chu vi hình chữ nhật là: ", this.getPerimeter());
  };
}

function bai_01() {
  // Nhập thông tin Height và Width từ người dùng
  const width = Number(prompt("Nhập vào chiều rộng hình chữ nhật:"));
  const height = Number(prompt("Nhập vào chiều cao hình chữ nhật:"));

  // Khai báo và khởi tạo 1 đối tượng
  const rectangle_01 = new Rectangle(width, height); // Phải trùng thứ tự với khai báo bên trên
  const area_01 = rectangle_01.getArea();
  const perimeter_01 = rectangle_01.getPerimeter();
  console.log("Kiểm tra hình chữ nhật", rectangle_01);
  console.log("Diện tích hình chữ nhật là: ", area_01);
  console.log("Chu vi hình chữ nhật là: ", perimeter_01);

  rectangle_01.printer();
  const setHeight = Number(prompt("Nhập vào chiều cao muốn set lại: "));
  rectangle_01.setHeight(setHeight); // Đối số truyền vào
  rectangle_01.printer();
}
