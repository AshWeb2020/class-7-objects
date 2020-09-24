import { CartItem, ColorItem, SizeItem } from "./itemV1.js";
import { CartItem2, ColoredSized } from "./itemV2.js";
import { countryCheckOut } from "./checkout.js";

function itemsV1() {
  const item = new CartItem(10, 2, "Mangos");
  const item2 = new ColorItem(1, 200000, "Ferrari", ["Red", "Yellow"]);
  const item3 = new SizeItem(5, 10, "Ashesi T-Shirt");
  const basket = [item, item2, item3];
  console.table(basket);
  const totalCost = basket.reduce((total, currentItem) => {
    return total + currentItem.cost;
  }, 0);
  console.log(`total cost before tax ${totalCost}`);
  const ghanaCost = countryCheckOut(basket, "GH");
  const nigeriaCost = countryCheckOut(basket, "NG");
  console.log(
    `Ghana Cost with VAT ${ghanaCost} Nigerian Cost with VAT ${nigeriaCost}`
  );
}

function itemsV2() {
  const item = CartItem2(10, 2, "Mangos");
  const item2 = ColoredSized({
    quantity: 10,
    price: 100,
    name: "Polo Shirt",
    colors: ["Red", "Yellow", "Striped"],
  });
  const basket = [item, item2];
  console.log("items v2");
  console.table(basket);
  const ghanaCost = countryCheckOut(basket, "GH");
  const nigeriaCost = countryCheckOut(basket, "NG");
  console.log(
    `Ghana Cost with VAT ${ghanaCost} Nigerian Cost with VAT ${nigeriaCost}`
  );
}
itemsV1();
itemsV2();
