// Script bài 1
// Cách 1
function bai_01_cach_1() {
  const data = [
    ["a", "b"],
    ["c", "d", "e"],
    ["f", "g", "h"],
  ];

  const newData = data.reduce((pre, item) => pre.concat(item), []);
  console.log("Kiểm tra data cách 1: ", newData);
}

// Cách 2: Dùng Spread
function bai_01_cach_2() {
  const data = [
    ["a", "b"],
    ["c", "d", "e"],
    ["f", "g", "h"],
  ];

  const newData = [].concat(...data);
  console.log("Kiểm tra data cách 2: ", newData);
}

// <------------------------>
