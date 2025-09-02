const cartArray = [];

function addToCart(cart, productName) {

  const product = cart.find(item => item.name === productName);
  if (product) {
    product.quantity += 1;
  } else {
    cart.push({ name: productName, quantity: 1 });
  }

  return cart
}

addToCart(cartArray, "apple");
addToCart(cartArray, "banana");
addToCart(cartArray, "apple");
cartArray.forEach((item) => console.log(item))