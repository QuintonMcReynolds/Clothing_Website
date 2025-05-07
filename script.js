function showAllProducts(products) {
  products.forEach((product) => {
    newProductCard(product);
  });
}

function getFilteredProducts(productNames, query) {
  return productNames.filter((product) => {
    return product.toLowerCase().includes(query.toLowerCase());
  });
}
function getConvertedPrices(productPrices, currency) {
  return productPrices.map((price) => {
    if (currency === "usd") return price;
    if (currency === "gbp") return price * 0.79; // Assuming 1 USD = 0.79 GBP
    if (currency === "jpy") return price * 110; // Assuming 1 USD = 110 JPY
    return price; // Default to USD if currency is not recognized
  });
}
function getCartTotal(cartPrices) {
  return cartPrices.reduce((accumulator, price) => {
    return accumulator + price;
  }, 0);
}

showAllProducts(PRODUCTS);
