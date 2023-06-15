// Ví dụ 1: Hiển thị ra màn hình số nhỏ hơn 9
function bai_01() {
    for (let i = 0; i < 9; i++) {
        console.log(i);
    }
}

// <---------------------------------->

// Ví dụ 2: Hiển thị ra màn hình số chẳn, số lẻ

function bai_02() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
          console.log(i + " là số chẵn");
        } else {
          console.log(i + " là số lẻ");
        }
      }
}

// <---------------------------------->

// Ví dụ 3: Tính tổng từ 0 đến N

function bai_03() {
    const N = parseInt(prompt("Nhập số N:"));
    let sum = 0;

    if(N < 0) {

    for (let i = N; i <= 0; i++) {
    sum += i;
    }
    } else {
        for (let i = 0; i <= N; i++) {
            sum += i;
        }
    }
    

console.log("Tổng từ 0 đến", N, "là", sum);
}

// <---------------------------------->

// Ví dụ 4: Tính tổng từ 0 đến N

function bai_04() {
    let number = 0;
    let sum = 0;
    let i = 0;

    for (let count = 0; count < 30;) {
        if (number % 7 === 0) {
          sum += number;
          count++ ;
        }
        number++;
        i++;
        console.log(i);
      }
    console.log("Tổng từ 0 đến 30 của các số chia hết cho 7 là", sum);
}

// Cách 2:

// function bai_04() {
//     let number = 0;
//     let sum = 0;

//     for (let count = 0; count < 30; count++) {
//         sum = sum+ number;
//         number+=7;
//     }
//     console.log("Tổng từ 0 đến 30 của các số chia hết cho 7 là", sum);
// }

// <---------------------------------->

// Ví dụ 5: Tính tổng từ 0 đến N
function bai_05() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
        } else if (i % 3 === 0) {
          console.log("Fizz");
        } else if (i % 5 === 0) {
          console.log("Buzz");
        } else {
          console.log(i);
        }
      }
}
