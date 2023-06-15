// Script bài 3

function bai_01() {
    const inputElement = document.querySelector("#temp");
    // console.log(1111, inputElement);
    console.log("Giá trị của Input", inputElement.value);
    console.log(typeof inputElement)
    // inputElement.className = 'box-input'
    const tempValue = inputElement.value;
    const F = tempValue*1.8 +32;

    const resultElement = document.querySelector('.result-01');
    resultElement.innerHTML = "Nhiệt độ đã chuyển đổi là: " + tempValue + " độ C bằng " + F + " độ F";
}

// Script bài 3

// <-----------------------------> //

// Script bài 3

function bai_03() {
    const side = Number(prompt('Nhập vào cạnh hình vuông'));
    if (side <= 0) {
        alert("vui lòng nhập lại");
        return;
    }
    const area = side * side;
    const resultElement = document.querySelector('.result-03');
    resultElement.innerHTML = "Diện tích của hình vuông là: " + area;
}

// Script bài 3

// <-----------------------------> //

// Script bài 4

function bai_04() {
    const width = Number(prompt('Nhập chiều dài của hình chữ nhật: '));
    const height = Number(prompt('Nhập chiều rộng của hình chữ nhật: '))
    const area = width * height;
    const resultElement = document.querySelector('.result-04');
    resultElement.innerHTML = "Diện tích của hình chữ nhật là: " + area;
}

// Script bài 4

// <-----------------------------> //

// Script bài 5

function bai_05() {
    const canhA = Number(prompt('Nhập cạnh a của tam giác: '));
    const canhB = Number(prompt('Nhập cạnh b của tam giác: '))
    const area = (canhA * canhB) / 2;
    const resultElement = document.querySelector('.result-05');
    resultElement.innerHTML = "Diện tích của tam giác là: " + area;
}

// Script bài 5

// <-----------------------------> //

// Script bài 6

function bai_06() {
   const usdValue= document.querySelector("#usd").value;
   const vnd = usdValue*23000;

   const vndElement = document.querySelector("#vnd");
   vndElement.value = vnd.toLocaleString() + " VNĐ";
}


// Script bài 6

// <-----------------------------> //

// Script bài 10

function bai_10() {
    const soDien = Number(prompt("Nhập vào số lượng tiêu thụ điện kWh: "));
    let bill;
    const rank_1 = 50 * 1700;
    const rank_2 = rank_1 + 50 * 1800;
    const rank_3 = rank_2 + 100 * 1900;
    const rank_4 = rank_3 + 100 * 2000;
    const rank_5 = rank_4 + 100 * 2200;

    switch(true) {
        case soDien <=50:
            bill = soDien *1700;
            break;
        case soDien <=100:
            bill = (soDien-50) *1000 + rank_1;
            break;
        case soDien <=200:
            bill = (soDien-100) *1000 + rank_2;
            break;
        case soDien <=300:
            bill = (soDien-200) *1000 + rank_3;
            break;
        case soDien <=400:
            bill = (soDien-300) *1000 + rank_4;
            break;
            default:
            bill = (soDien-400) *1000 + rank_5;
    }

    const resultElement = document.querySelector('.result-10');
    resultElement.innerHTML = "Tiền điện cần phải trả là: " + bill.toLocaleString('de-DE') + " VND";
}


// Script bài 10

