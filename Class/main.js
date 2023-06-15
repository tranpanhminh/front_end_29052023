// If ( 10 > 5 ) {
//     console.log('Chính xác');
// }
// if ( 10 < 5 ) {
//     console.log("10 bé hơn 5");
// } console.log('Hello World');

// if(10) {

// }

// Falsy gồm: "", null, undefined, 0 NaN, false

// Nghịch đảo: !falsy = truethy hoặc ngược lại

// If lồng vào nhau:

// Tìm số lớn nhất trong 3 số

const a = 10;
const b = 20;
const c = 5;

// let max = a;
if (a < b) {
    // a = b;
    if (b < c) {
        // max = c;
        console.log('Kết quả số lớn nhất là: ', c);
    } else {
        console.log('Kết quả số lớn nhất là: ', b);
    }
} else {
    if (a<c) {
        console.log('Kết quả số lớn nhất là: ', c)
    } else {
        console.log('Kết quả số lớn nhất là: ', a);
    }
}

// Cách 2:

let max = a;
if (max < b) {
    max = b;
    if (max < c) {
        max = c;
    }
    // Nếu không thỏa điều kiện trên --> Max vẫn là b
}   else {
    // Nếu max vẫn bằng a
    if (max < c) {
        max = c;
    }
}
console.log('Kết quả kiểm tra lần 2:', max);

// Phân loại học sinh
const mark = 8;
if (mark >=8) {
    console.log('Học sinh giỏi');
} else if (mark>=6.5) {
    console.log('Học sinh khá');
} else if (mark >=5) {
    console.log('Học sinh trung bình')
} else {
    console.log('Học sinh yếu');
}

// Cách 2:
let rank = '';
if (mark >=8) {
    rank = 'Học sinh giỏi';
} else if (mark>=6.5) {
    rank = 'Học sinh khá';
} else if (mark >=5) {
    rank = 'Học sinh trung bình';
} else {
    rank = 'Học sinh yếu';
}

console.log(rank); // Hiển thị cho người dùng.

// Không nên dùng
if (mark >=8) {
    console.log('Học sinh giỏi');
}

if(mark< 8 && mark >= 7) {
    console.log('Học sinh khá');
}

// Cấu trúc Switch Case

const number = Number(prompt('Nhập vào 1 số từ 1 đến 5'));

switch(number) {
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
         break;
    case 3:
        console.log('Three');
        break;
    case 4:
        console.log('Four');
        break;
    case 5:
        console.log('Five');
        break;
        default:
        // Statement
        console.log('Vui lòng nhập số từ 1 đến 5');
}