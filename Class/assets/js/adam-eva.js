// Xây dựng mô hình đối tượng
function Human(name, weight, gender) {
  // Khai báo thuộc tính
  this.name = name;
  this.weight = weight; // Đơn vị: kg
  this.gender = gender;

  // Khai báo hành vi
  this.eat = (fruit) => {
    if (fruit.getWeight() > 0) {
      //1: Ảnh hưởng quả táo
      fruit.decrease();
      //2: Ảnh hưởng người ăn
      this.increase(); // Khối lượng người ăn sẽ tăn lên
    } else {
      console.log("Quả táo này đã hết rồi!");
    }
    console.log("Ăn gì", fruit);
    // 1: Ảnh hưởng quả táo

    this.increase = () => {
      this.weight += 0.1;
    };

    this.getInfo = () => ({
      name: this.name,
      weight: this.weight,
      gender: this.gender,
    });
  };
}

class Fruit {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight; // Đơn vị: kg
  }
  getWeight = () => this.weight;
  decrease = () => {
    this.weight = Number((this.weight - 0.1).toFixed(1));
  };
}

const apple = new Fruit("Apple", 0.2);

// Khai báo và khởi tạo 1 đối tượng cụ thể
const adam = new Human("Adam", 70, true);
console.log("Thông tin của Adam", adam.getInfo());
function handleEat() {
  adam.eat(apple);
  console.log("Sau khi ăn táo thì Adam có thông tin", adam);
  console.log("Sau khi ăn táo thì táo còn", adam);
}
