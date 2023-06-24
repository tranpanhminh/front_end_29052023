const imageUrl = [
  "https://media.istockphoto.com/id/1485445462/vi/anh/t%C3%A0u-h%C6%A1i-n%C6%B0%E1%BB%9Bc-jacobite-tr%C3%AAn-c%E1%BA%A7u-c%E1%BA%A1n-glenfinnan-%E1%BB%9F-cao-nguy%C3%AAn-t%C3%A2y-b%E1%BA%AFc-scotland-v%C6%B0%C6%A1ng-qu%E1%BB%91c-anh-xe.jpg?s=612x612&w=0&k=20&c=5REPTs6ne_r473PfP_Xfgs-kPDbIBjhy3c9Gc4iNsg0=",
  "https://media.istockphoto.com/id/850915986/vi/anh/c%E1%BA%B7p-%C4%91%C3%B4i-%C4%91%C3%A1ng-y%C3%AAu-d%C3%A0nh-v%C3%A0i-ng%C3%A0y-trong-k%E1%BB%B3-ngh%E1%BB%89-%E1%BB%9F-paris.jpg?s=612x612&w=0&k=20&c=Ui-IKxlfqcKcpTzVScQR873TC7eYn6nwkBPJVcC18y4=",
  "https://media.istockphoto.com/id/1347920908/vi/anh/ng%C3%B4i-l%C3%A0ng-bibury-xinh-%C4%91%E1%BA%B9p-%E1%BB%9F-cotswolds.jpg?s=612x612&w=0&k=20&c=xOMTkK8FdXTSBFWUlwKhl9B5k07HfCiugHQl2OCnIwE=",
  "https://cdn.pixabay.com/photo/2023/06/15/02/38/fauna-8064270_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/08/04/49/cat-8048688_640.jpg",
  "https://images.unsplash.com/photo-1551257227-0ac2bb537380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9ybWFuZHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1559871753-75a00941f6b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvb3J3YXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1604509082195-1d60a05fbe1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1587978191773-ae3cd9e26501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
  "https://media.istockphoto.com/id/503564070/vi/anh/big-ben-v%C3%A0-whitehall-t%E1%BB%AB-qu%E1%BA%A3ng-tr%C6%B0%E1%BB%9Dng-trafalgar-london.webp?b=1&s=170667a&w=0&k=20&c=BbBypgPda6EUVhS0PDcgWuhYOZvaOxY611D5LrInWWE=",
];
function renderAlbum() {
  let renderImgElement = "";
  imageUrl.forEach((element, index) => {
    renderImgElement += `<figure><img
        src="${element}"
        alt=""
      /><figcaption><button onclick="handleEdit(${index})">Edit</button><button onclick="handleDelete(${index})">Delete</button></figcaption></figure>`;
  });
  document.querySelector(".image").innerHTML = renderImgElement;
}
renderAlbum();

function handleDelete(index) {
  imageUrl.splice(index, 1);
  renderAlbum();
}
function handleAdd() {
  const inputElement = document.querySelector(".input_img");
  imageUrl.push(inputElement.value);
  inputElement.value = " ";
  renderAlbum();
}
function handleEdit(j) {
  index = j;
  const renderElement = document.querySelector(".input_src");
  renderElement.value = imageUrl[j];
  renderElement.setAttribute("data", j);
  document.querySelector(".update").style.display = "block";
}
function handleUpdate() {
  const renderElement = document.querySelector(".input_src");
  let value = renderElement.value;
  let index = Number(renderElement.getAttribute("data"));
  if (renderElement == "") {
    return;
  } else {
    imageUrl.splice(index, 1, value);
    renderAlbum();
  }
  document.querySelector(".update").style.display = "none";
}
