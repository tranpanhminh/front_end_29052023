const imageUrl = [
    "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/16/11/47/books-8067850_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/15/08/05/bee-8064761_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/15/02/38/fauna-8064270_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/08/04/49/cat-8048688_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/10/04/31/eurasian-whimbrel-7982937_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/15/11/04/huddle-of-walrus-8065100_640.jpg",
    "https://cdn.pixabay.com/photo/2023/05/24/21/56/bug-8015937_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/03/18/12/benz-8038240_640.jpg",
    "https://cdn.pixabay.com/photo/2023/06/09/18/30/ibex-8052387_640.jpg",
  ];
  
  renderAlbum(imageUrl);
  function renderAlbum(data) {
    const mainElement = document.querySelector("main");
    let mainContent = "";
    data.forEach((element) => {
      mainContent += ` <div class="item"><img src="${element}" alt="" /></div>`;
    });
  
    mainElement.innerHTML = mainContent;
  }
  