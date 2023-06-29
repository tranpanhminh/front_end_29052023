// <-------------------------------------> //
// Script bài 4
let courseArray = [];

function bai_04() {
  let inputValue = "";
  while (inputValue !== "E") {
    inputValue = prompt(
      "Nhập vào 1 trong 5 chữ C / R / U / D / E: "
    ).toUpperCase();
    if (inputValue === "C") {
      pressC();
      render();
    } else if (inputValue === "R") {
      pressR();
    } else if (inputValue === "U") {
      pressU();
    } else if (inputValue === "D") {
      pressD();
    }
  }
  alert("Cảm ơn bạn đã đến với Rikkei Academy");
}

function pressC() {
  let inputCourse = prompt("Nhập khóa học: ");
  let inputStatus = prompt("Tình trạng khóa học: ");

  let course = {
    name: inputCourse,
    complete: inputStatus,
  };

  courseArray.push(course);
}

function render() {
  let listCourse = document.querySelector(".list-course");
  let courseContent = "";
  for (let i = 1; i <= courseArray.length; i++) {
    courseContent += `<p class="course-item">${i}. ${
      courseArray[i - 1].name
    }</p>
    <p class="course-status">Complete: ${courseArray[i - 1].complete}</p>`;
  }

  listCourse.innerHTML = courseContent;
}

function pressR() {
  const course_01 = new Course(1, "HTML", "false");
  const course_02 = new Course(2, "CSS", "false");
  const course_03 = new Course(3, "Basic of Javascript", "false");
  const course_04 = new Course(4, "Node package Manager (npm)", "false");
  const course_05 = new Course(5, "Git", "false");
  let listCourse = document.querySelector(".list-course");
  let courseContent = "";
  courseArray.push(course_01, course_02, course_03, course_04, course_05);
  for (i = 0; i < courseArray.length; i++) {
    courseContent += `<p class="course-item">${courseArray[i].id}. ${courseArray[i].name}</p>
    <p class="course-status">Complete: ${courseArray[i].complete}</p>`;
  }
  listCourse.innerHTML = courseContent;
  render(courseArray);
}

function Course(id, name, complete) {
  this.id = id;
  this.name = name;
  this.complete = complete;
}

function pressU() {
  let inputIndex = prompt("Nhập vào vị trí khóa học bạn muốn edit");
  let newCourseName = prompt("Nhập vào tên Course mới");
  let newCourseComplete = prompt("Nhập vào tình trạng của Course mới");

  let newCourse = {
    name: newCourseName,
    complete: newCourseComplete,
  };

  inputIndex = parseInt(inputIndex) - 1;
  courseArray.splice(inputIndex, 1, newCourse);
  render(courseArray);
}

function pressD() {
  let inputIndex = prompt("Nhập vào vị trí khóa học bạn muốn xóa");
  inputIndex = parseInt(inputIndex) - 1;
  courseArray.splice(inputIndex, 1);
  render(courseArray);
}