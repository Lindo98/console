// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// forEach to log each name and each province:

names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// to create a new array of province names in all uppercase using map:

const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// create name length array using map:

const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// sort provinces alphabetically using sort:

const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// filter out provinces containing "Cape" using filter:

const CapeProvinces = provinces.filter((province) => province.includes("Cape"));
console.log(CapeProvinces);

// create boolean array using map and some:

const containsS = names.map((name) =>
  name
    .toLowerCase()
    .split("") //turns each
    .some((character) => character === "s")
);
console.log(containsS);

// use reduce to transform the names array into an object mapping names to their respective provinces:

const nameToProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvinceMap);

// Advanced exercise

// Log Products
console.log(
  (() => {
    let output = "";

    // Display each product's name
    products.forEach((product) => {
      output += `${product.product}\n`;
    });

    // Filter by Name Length
    const nameCharacters = products.filter(
      (product) => product.product.length > 5
    );
    output += `\nFiltered by Name Length (more than 5 characters):\n${JSON.stringify(
      nameCharacters,
      null,
      2
    )}\n`;

    // Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce
    const validProducts = products.filter(
      (product) => product.price && !isNaN(product.price)
    );
    const productsWithNumberPrices = validProducts.map((product) => ({
      ...product,
      price: Number(product.price),
    }));
    const totalPrice = productsWithNumberPrices.reduce(
      (acc, product) => acc + product.price,
      0
    );
    output += `\nTotal Price of Valid Products: ${totalPrice}\n`;

    // Concatenate Product Names
    const concatenatedNames = products
      .map((product) => product.product)
      .reduce((acc, product) => acc + product, "");
    output += `\nConcatenated Product Names: ${concatenatedNames}\n`;

    // Identify the highest and lowest-priced items
    const highestPriced = validProducts.reduce((max, product) =>
      product.price > max.price ? product : max
    );
    const lowestPriced = validProducts.reduce((min, product) =>
      product.price < min.price ? product : min
    );
    output += `\nHighest Priced Product: ${highestPriced.product}\nLowest Priced Product: ${lowestPriced.product}\n`;

    // Object Transformation
    const transformedProducts = products.map((product) => ({
      product: product.product,
      cost: product.price,
    }));
    output += `\nTransformed Products:\n${JSON.stringify(
      transformedProducts,
      null,
      2
    )}\n`;

    return output;
  })()
);
