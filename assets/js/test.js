function bai_04() {
    function inputProduct(...productsName) {
      const listProducts = [];
      productsName.forEach((product, i) => {
        const code = `SP_${i + 1}`;
        const name = product;
        const quantity = 20;
        const productObj = {
          code: code,
          name: name,
          quantity: quantity,
        };
        listProducts.push(productObj);
      });
      return listProducts;
    }
    const convertArray = inputProduct("Samsung", "Apple", "Xiaomi");
    console.log("Kết quả Code: ", convertArray);
  }