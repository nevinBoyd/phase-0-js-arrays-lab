// Write your code here
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  if (products.length > 0) {
    console.log(products[0]);
  } else {
    console.log("No products available.");
  }
}

function addProduct(productName) {
  products.push(productName);
  console.log(`Product "${productName}" added.`);
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    let oldName = products[position];
    products[position] = newName;
    console.log(`Product "${oldName}" updated to "${newName}".`);
  } else {
    console.log("Invalid position.");
  }
}

function removeLastProduct() {
  if (products.length > 0) {
    let removed = products.pop();
    console.log(`Product "${removed}" removed.`);
  } else {
    console.log("No products to remove.");
  }
}

module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
