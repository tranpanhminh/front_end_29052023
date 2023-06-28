class Car {
  // Xây dựng các thuộc tính
  constructor(name, speed, weight, color) {
    this.name = name;
    this.speed = speed;
    this.weight = weight;
    this.isRun = false;
    this.color = color;
  }

  // Xây dựng các phương thức
  start() {
    this.isRun = true;
  }
  stop() {
    this.isRun = false;
  }
  getColor = () => this.color; // hoặc getColor = () => {return(this.color)}
  getSPeed = () => this.speed;
  getInfo = () => ({
    // Dùng khi return arrow function là 1 object --> Không phân biệt được obj với khối lệnh js
    name: this.name,
    speed: this.speed,
    weight: this.speed,
    color: this.color,
  });
  setColor = (color) => {
    this.color = color;
  };
}

const car = new Car("My Car", 250, 2000, "Red");
console.log("Kiểm tra thông tin xe:", car.getInfo());

// <----------------------------------->

// Kiểm tra 1 số đối tượng, phương thức có sẵn trong JS

// Array(), Object(), String(), Date()
const today = new Date();
console.log(today);

// Phương thức lấy ngày
const day = today.getDate();

// Phương thức lấy tháng
const month = today.getMonth() + 1; // Tính từ - đến 11 nên phải cộng thêm 1

// Phương thức lấy năm
const year = today.getFullYear();

// Lấy được giờ, lấy được phút, lấy được giây tương ứng
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

// Muốn lấy ngày tháng năm
const formatToday = today.toLocaleDateString("en-GB");

// Lấy thời gian chính xác
const time = today.toLocaleTimeString();

console.log("Hôm nay lầ ngày: ", day);
console.log("Tháng này là: ", month);
console.log("Năm này là: ", year);
console.log("Lúc này là: :", hour, "giờ", minute, "phút", second, "giây");
console.log("Hôm nay là: ", formatToday);
console.log("Thời gian này là: ", time);

// <----------------------------------->

// Một số phương thức khác
const number = 10.7;
Math.random(); // Kết quả số thập phân từ 0 đến bế hơn 1
Math.sqrt(number); // Căn bậc 2
Math.floor(number); // Làm tròn xuống ~ parseInt()
Math.round(number); // Làm tròn thông thường
Math.pow(); // Số mũ
Math.ceil(number); // Làm tròn lên
