let arr = [];
function display() {
  let productName = document.getElementById("productName").value;
  let productPrice = document.getElementById("productPrice").value;
  let serialNumber = document.getElementById("serialNumber").value;
  const productDetails = {
    name: productName,
    price: productPrice,
    serial: serialNumber,
  };
  arr.push(productDetails);

  let output = document.getElementById("output");

  output.innerHTML = `Your Product Name Is ${
    arr[arr.length - 1].name
  } And Price Is ${arr[arr.length - 1].price} And Serial No. Is ${
    arr[arr.length - 1].serial
  }`;
}
