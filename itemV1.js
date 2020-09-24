/**
 * This is an example of declaring items using a 'traditional' object oriented approach in Javascript
 */

export class CartItem {
  constructor(quantity, price, name) {
    this.quantity = quantity ? quantity : 0;
    this.price = price ? price : 0;
    this.description = name ? name : "No Name";
    this.currentInventory = 0;
  }
  addInventory(amount) {
    this.currentInventory += amount;
  }
  get inventory() {
    return this.currentInventory;
  }
  set inventory(amount) {
    this.currentInventory = amount;
  }
  hasInventory() {
    return this.currentInventory > 0;
  }
  get cost() {
    return this.quantity * this.price;
  }
}

export class ColorItem extends CartItem {
  constructor(quantity, price, name, colors) {
    super(quantity, price, name);
    this.color = colors ? colors : ["black"];
  }
}
export class SizeItem extends CartItem {
  constructor(quantity, price, name, sizes) {
    super(quantity, price, name);
    this.sizes = sizes ? sizes : ["small", "medium", "large"];
  }
}
export class ColorSizeItem extends ColorItem {
  constructor({ quantity, price, name, colors, sizes }) {
    super(quantity, price, name, colors);
    this.size = sizes ? sizes : ["small", "medium", "large"];
  }
}
