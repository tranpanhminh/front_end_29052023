let array = ["Javascript", "PHP", "ReactJS", "NodeJs"];
// Lấy ra vị trí thứ nhất và phần còn lại
let [a, ...rest] = array;
console.log(a);
console.log(rest);

let listObject = {
  name:  "Javescript",
  price: 1000,
  status: "active",
};

let {name, ...restt} = listObject;
console.log(name)
console.log(restt)
