// Script ví dụ 1
function bai_01() {

    const resultElement = document.querySelector(".result-01");
    const number = Number(prompt("Nhập số cần tạo bảng cửu chương: "))
    let resultContent = "";

    for (let i = 1; i < 10; i++) {
        // resultContent += "<p></p>5 x " + i + "=" + 5*i + "<p>"; Cái này và cái bên dưới giống nhau chỉ là dấu backstick có thể viết nhanh hơn trong dấu ${biến} là biến
        resultContent += `<p> ${number} x ${i} = ${number*i} </p>`
    }

    resultElement.innerHTML = resultContent;
}

// <------------------------->

// Script ví dụ 2
function bai_02() {
    const number = Number(prompt("Nhập số cần tạo bảng cửu chương: "))
    const resultElement = document.querySelector(".result-02");

    let count = 0;
    let resultContent = '';
    while (count < number) {
     resultContent += '<hr width="' + count + '%">';
     count++;
    }
    resultElement.innerHTML = resultContent;
    
}

// <------------------------->

// Script ví dụ 3
function bai_03() {
    let answer;

    do {
        answer=confirm('Bạn có yêu tôi không?');
        console.log("answer", answer);
        if(answer) {
            alert('I love you too');
        }
    } while (answer);
    
}

// <------------------------->

// Script ví dụ 4: Thấy Break sẽ dừng chạy luôn
function bai_04() {
    for (let i = 0; i<10000000; i++) {
        console.log('Lần log 1: ', i);
        if (i===10) {
            break;
        }
        console.log("Lần log 2: ", i);
    }
    console.log("Hello World");
}

// <------------------------->

// Script ví dụ 5: Thấy Continue sẽ bỏ qua và chạy tiếp
function bai_05() {
    for (let i = 0; i<20; i++) {
        console.log('Lần log 1: ', i);
        if (i % 2 ===0) {
            continue;
        }
        console.log("Lần log 2: ", i);
    }
    console.log("Hello World");
}

// <------------------------->

// Script ví dụ 6
function bai_06() {
    const resultElement = document.querySelector(".result-06");
    let resultContent = "";
    for (let row = 1; row <=9; row++){
        resultContent += '<tr>'
        for (let col = 1; col <=9; col++) {
            resultContent +=`<td> ${col} x ${row} = ${row*col} </td>`
        }
        resultContent += '</tr>'
    }
    resultElement.innerHTML = resultContent;
} 

// <------------------------->

// Script ví dụ 7
function bai_07() {
    var count = 0; // Đếm số lượng số chia hết cho 7 đã tìm được
    var sum = 0; // Tổng của các số chia hết cho 7
    var number = 0; // Số tự nhiên bắt đầu từ 0

for (var i = 0; count < 30; i++) {
  if (number % 7 === 0) {
    sum += number;
    count++;
  }
  number++;

}

    const resultElement = document.querySelector(".result-07");
    resultElement.innerHTML = `Tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên là: ${sum}`
}

// <------------------------->

// Script ví dụ 8
function bai_08() {
    var count = 0; // Đếm số lượng số chia hết cho 7 đã tìm được
    var sum = 0; // Tổng của các số chia hết cho 7
    var number = 0; // Số tự nhiên bắt đầu từ 0

for (var i = 0; count < 30; i++) {
  if (number % 7 === 0) {
    sum += number;
    count++;
  }
  number++;

}

    const resultElement = document.querySelector(".result-08");
    resultElement.innerHTML = `Tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên là: ${sum}`
}