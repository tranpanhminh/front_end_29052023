function pressC() {
  let listCourse = document.querySelector(".list-course");
  let inputCourse = prompt("Nhập khóa học: ");
  let inputStatus = prompt("Tình trạng khóa học: ");

  let course = {
    name: inputCourse,
    status: inputStatus,
  };

  courseArray.push(course);

  let courseContent = "";
  for (let i = 1; i <= courseArray.length; i++) {
    courseContent += `<p class="course-item">${i}. ${courseArray[i - 1].name}</p>
    <p class="course-status">Complete: ${courseArray[i - 1].status}</p>`;
  }

  listCourse.innerHTML = courseContent;
}