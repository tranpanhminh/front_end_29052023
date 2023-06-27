function bai_tap() {
  const catName = prompt("Nhập tên mèo");
  const catWeight = Number(prompt("Nhập cân nặng mèo"));
  const catSpeed = Number(prompt("Nhập tốc độ mèo"));

  const cat = new Cat(catName, catWeight, catSpeed);
  console.log("Kiểm tra Mèo: ", cat);
  const mouse = [
    new Mouse(0.5, 10, true),
    new Mouse(0.4, 15, true),
    new Mouse(0.9, 0, false),
    new Mouse(0.2, 25, true),
  ];

  console.log("Kiểm tra Mèo sau khi bắt: ", cat);
  cat.catchMouse(mouse[0]);

  // Yêu cầu mèo bắt hết chuột
  mouse.forEach((mouse) => {
    cat.catchMouse(mouse);
  });
  console.log("Kiểm tra đàn chuột sau khi bị bắt", mouse);
  console.log("Kiểm tra mèo sau khi bắt đàn chuột", cat);
}

// Constructor function
function Cat(name, weight, speed) {
  // Khai báo thuộc tính
  this.name = name;
  this.weight = weight;
  this.speed = speed;

  // Khai báo hành vi
  this.speak = () => {
    return "Meo Meo";
  };

  this.catchMouse = (mouse) => {
    // Điều kiện bắt chuột khi tốc độ mèo lớn hơn chuột
    if (this.speed > mouse.getSpeed() && this.weight > mouse.getWeight()) {
      // Sau khi bắt chuộc --> Ăn chuột
      this.eatMouse(mouse);
    } else {
      console.log("%c Không bắt được chuột này!");
    }
  };

  this.eatMouse = (mouse) => {
    // Điều kiện để ăn chuột
    if (mouse.getStatus()) {
      // Sau khi ăn, cân nặng tăng lên
      this.weight += mouse.getWeight();
      mouse.setStatus(false);
    }
  };
}

function Mouse(weight, speed, status) {
  // Khai báo thuộc tính
  this.weight = weight;
  this.speed = speed;

  // Khai báo hành vi
  this.getSpeed = () => this.speed;
  this.getWeight = () => this.weight;
  this.getStatus = () => this.status;
  this.speak = () => "Chít Chít";
  this.setStatus = (status) => (this.status = status);
}
