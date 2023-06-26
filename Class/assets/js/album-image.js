let album = [
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
    Title: "Ảnh 1",
    Author: "John Smith",
    Price: 500,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/18/00/38/beetle-8070966_1280.jpg",
    Title: "Ảnh 2",
    Author: "Emma Johnson",
    Price: 10000,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/19/15/48/butterfly-8074948_1280.jpg",
    Title: "Ảnh 3",
    Author: "Michael Davis",
    Price: 200,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/12/11/34/mushrooms-8058299_1280.jpg",
    Title: "Ảnh 4",
    Author: "Olivia Thompson",
    Price: 350,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/01/13/07/annas-hummingbird-8033578_1280.jpg",
    Title: "Ảnh 5",
    Author: "William Anderson",
    Price: 4000,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/14/20/29/flower-8063961_1280.jpg",
    Title: "Ảnh 6",
    Author: "Sophia Brown",
    Price: 8000,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/14/21/16/flowers-8064007_1280.jpg",
    Title: "Ảnh 7",
    Author: "James Wilson",
    Price: 4500,
  },
  {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/06/15/16/51/finch-8066014_1280.jpg",
    Title: "Ảnh 8",
    Author: "Ava Martinez",
    Price: 5500,
  },
];
// Render dữ liệu
function renderAlbum(album) {
  let albumContainer = document.querySelector(".album-container");
  let albumContainerContent = "";
  for (let i = 0; i < album.length; i++) {
    albumContainerContent += `<div class="album-item">
    <img src="${album[i].ImageUrl}" alt="">

    <div class="group-image-info">
        <div class="image-info">
            <h4 class="image-title">${album[i].Title}</h4>
            <p class="image-author">Author: ${album[i].Author}</p>
            <p class="image-price">Price: ${album[i].Price}</p>
        </div>
        <div class="group-button">
            <button class="edit-btn" onclick="handleEdit(${i})">Edit</button>
            <button class="delete-btn"  onclick="handleDelete(${i})">Delete</button>
        </div>
    </div>
</div>`;
  }
  albumContainer.innerHTML = albumContainerContent;
}
renderAlbum(album);

// Function Delete
function handleDelete(i) {
  const deletedTitle = album[i].Title;
  album.splice(i, 1);
  console.log(i);
  alert("Đã xóa ảnh: " + deletedTitle);
  renderAlbum(album);
}

// Function Add
function handleAdd() {
  const addImageUrl = document.querySelector(".add-image-url").value;
  const addTiTle = document.querySelector(".title-image").value;
  const addAuthor = document.querySelector(".author-image").value;
  const addPrice = document.querySelector(".price-image").value;

  let addNewImage = {
    ImageUrl: addImageUrl,
    Title: addTiTle,
    Author: addAuthor,
    Price: addPrice,
  };

  if (addImageUrl == "") {
    return;
  } else {
    album.push(addNewImage);
  }

  document.querySelector(".add-image-url").value = "";
  document.querySelector(".title-image").value = "";
  document.querySelector(".author-image").value = "";
  document.querySelector(".price-image").value = "";

  alert("Đã thêm 1 ảnh mới");

  renderAlbum(album);
}

// Function Edit
function handleEdit(i) {
  let editImageUrl = document.querySelector(".now-image-url");
  let editTitle = document.querySelector(".now-title-image");
  let editAuthor = document.querySelector(".now-author-image");
  let editPrice = document.querySelector(".now-price-image");
  let indexElement = document.querySelector(".now-id-image");

  indexElement.value = i;

  editImageUrl.value = album[i].ImageUrl;
  editTitle.value = album[i].Title;
  editAuthor.value = album[i].Author;
  editPrice.value = album[i].Price;

  let formEditImageShow = document.querySelector(".form-edit-image");
  formEditImageShow.style.display = "block";
}

// Function Update
function handleUpdate(i) {
  let imageIndex = document.querySelector(".now-id-image").value;
  let updateImageUrl = document.querySelector(".edit-image-url").value;
  let updateTitle = document.querySelector(".edit-title-image").value;
  let updateAuthor = document.querySelector(".edit-author-image").value;
  let updatePrice = document.querySelector(".edit-price-image").value;

  for (let i = 0; i < album.length; i++) {
    if (updateImageUrl === "") {
      updateImageUrl = album[imageIndex].ImageUrl;
    }

    if (updateTitle === "") {
      updateTitle = album[imageIndex].Title;
    }

    if (updateAuthor === "") {
      updateAuthor = album[imageIndex].Author;
    }

    if (updatePrice === "") {
      updatePrice = album[imageIndex].Price;
    }
  }

  let updateImage = {
    ImageUrl: updateImageUrl,
    Title: updateTitle,
    Author: updateAuthor,
    Price: updatePrice,
  };

  if (imageIndex !== "") {
    album.splice(imageIndex, 1, updateImage);
  }

  let formEditImageHide = document.querySelector(".form-edit-image");
  formEditImageHide.style.display = "none";

  alert("Đã cập nhật ảnh: " + album[imageIndex].Title);

  renderAlbum(album);
}

// Function Search
function handleSearch() {
  let searchResult = document.querySelector(".search-result");
  let inputSearch = document
    .querySelector(".search-image-input")
    .value.toLowerCase();
  let imageSearch = [];

  for (const element of album) {
    if (
      element.Title.toLowerCase().includes(inputSearch) ||
      element.Author.toLowerCase().includes(inputSearch) ||
      element.Price.toString().includes(inputSearch)
    ) {
      imageSearch.push(element);
    }
  }

  searchResult.innerHTML = `Có ${imageSearch.length} kết quả tìm kiếm`;
  searchResult.style.display = "block";
  renderAlbum(imageSearch);
}
