let listImage = [
  "https://cdn.pixabay.com/photo/2023/06/11/14/11/flowers-8056102_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/05/27/11/03/wedding-8021285_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/15/02/38/fauna-8064270_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/16/05/56/dogwood-8067010_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/11/14/38/baby-8056153_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/19/11/10/hay-8074152_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/06/12/12/04/duck-8058344_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/05/10/04/31/eurasian-whimbrel-7982937_1280.jpg",
];

console.log(listImage[0]);

// Function Render
function renderListImage(listImage) {
  let gridContainer = document.querySelector(".grid-container");
  console.log(gridContainer);
  let gridContainerContent = "";
  for (let i in listImage) {
    gridContainerContent += `<div class="container-item">
      <img src="${listImage[i]}" alt="">
      <div class="group-btn">
          <button class="edit-btn btn" onclick="handleEdit(${i})">Edit</button>
          <button class="delete-btn btn" onclick="handleDelete(${i})">Delete</button>
          <div class="clear"></div>
          </div>
          </div>`;
  }
  gridContainer.innerHTML = gridContainerContent;
}
renderListImage(listImage);

// Function Delete
function handleDelete(i) {
  listImage.splice(i, 1);
  renderListImage(listImage);
}

// Function Add
function handleAdd() {
  let addImage = document.querySelector(".add-url-image").value;
  if (addImage !== "") {
    listImage.push(addImage);
  }
  document.querySelector(".add-url-image").value = "";
  renderListImage(listImage);
}

// Function Edit
function handleEdit(i) {
  let updateImage = document.querySelector(".url-image");
  updateImage.value = listImage[i];
  updateImage.setAttribute("data", i);
  console.log(updateImage);
}

// Function Update
function handleUpdate(i) {
  let updateUrlImage = document.querySelector(".url-image");
  let value = updateUrlImage.value;
  let index = Number(updateUrlImage.getAttribute("data"));
  if (updateUrlImage == "") {
    return;
  } else {
    listImage.splice(index, 1, value);
  }
  renderListImage(listImage);
}

// Function Search
function handleSearch() {
  let inputSearch = Number(document.querySelector(".search-data").value);
  console.log(typeof inputSearch);
  imageSearch = [];
  for (let j = 0; j < listImage.length; j++) {
    if (inputSearch === j) {
      imageSearch.push(listImage[j]);
    } else if (inputSearch === "") {
      imageSearch = listImage;
    }
  }
  renderListImage(imageSearch);
}
