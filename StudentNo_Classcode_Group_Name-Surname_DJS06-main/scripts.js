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

const containsS = names.map((name) => name.includes("S"));
console.log(containsS);

// use reduce to transform the names array into an object mapping names to their respective provinces:

const nameToProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvinceMap);
