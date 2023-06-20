// Script bài 1

// Cách 1:
function bai_01_1() {
  animals = ["Lion", "Tiger", "Wolf", "Kangaroo"];
  let animalsNew = "";
  for (let i = 0; i < animals.length; i++) {
    if (i == animals.length - 1) {
      animalsNew += animals[i];
    } else {
      animalsNew += animals[i] + ",";
    }
    console.log(animalsNew);
  }
  const resultElement = document.querySelector(".result-01");
  resultElement.innerHTML = animalsNew;
}

// Cách 2:
function bai_01_2() {
  animals = ["Lion", "Tiger", "Wolf", "Kangaroo"];
  let animalsNew2 = animals.toString();
  console.log("Cách 2: ", animalsNew2);

  const resultElement = document.querySelector(".result-01");
  resultElement.innerHTML = animalsNew2;
}

// Cách 3:
function bai_01_3() {
  animals = ["Lion", "Tiger", "Wolf", "Kangaroo"];
  const animalsNew3 = animals.join();
  console.log("Cách 3: ", animalsNew3);

  const resultElement = document.querySelector(".result-01");
  resultElement.innerHTML = animalsNew3;
}

// Script bài 2
// Cách 1:
function bai_02_1() {
  const newString = prompt("Nhập vào dãy số: ");

  let newN1 = "";
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] % 2 == 0 && newString[i + 1] % 2 == 0) {
      newN1 += newString[i] + "-";
    } else {
      newN1 += newString[i];
    }
    console.log(newN1);
  }

  const resultElement = document.querySelector(".result-02");
  resultElement.innerHTML = newN1;
}

// Cách 2:
function bai_02_2() {
  const newString2 = prompt("Nhập vào dãy số: ");
  console.log("Bước 1", newString2);

  const newStringSplit = newString2.split("");
  console.log("Bước 2", newStringSplit);

  for (let i = 0; i < newStringSplit.length; i++) {
    if (newStringSplit[i] % 2 === 0 && newStringSplit[i + 1] % 2 === 0) {
      newStringSplit[i] = newStringSplit[i] + "-";
    }
  }
  const convertToString = newStringSplit.join("");

  console.log("Bước 3: ", convertToString);

  const resultElement = document.querySelector(".result-02");
  resultElement.innerHTML = convertToString;
}

// Script bài 3
function bai_03() {
  const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let word = prompt("Nhập vào 1 chuỗi: ");
  console.log("Bước 1: ", word);
  let result = "";
  for (let i = 0; i < word.length; i++) {
    let isUpper = false;
    for (let j = 0; j < UPPER.length; j++) {
      if (word[i] === UPPER[j]) {
        result += word[i].toLowerCase();
        isUpper = true;
        console.log(result);
        break;
      }
    }
    if (!isUpper) {
      result += word[i].toUpperCase();
      console.log(result);
    }
  }
  const resultElement = document.querySelector(".result-03");
  resultElement.innerHTML = result;
}

// Script bài 4
function bai_04() {
  const vietnamese = ["Chó", "Mèo", "Gà"];
  const english = ["Dog", "Cat", "Chicken"];
  const word = document.querySelector("#vietnamese").value;
  result = "";
  for (let i = 0; i < vietnamese.length; i++) {
    if ((word == vietnamese[i])) {
      result = english[i];
    }
  }
  const resultElement = document.querySelector("#english");
  resultElement.value = result;
}
