/**
 * Object Composition Example
 * For more information, see also: https://ui.dev/javascript-inheritance-vs-composition/
 */
/**
 * CartItem2 Factory Function
 * @param {number} quantity
 * @param {number} price
 * @param {string} name
 */
export function CartItem2(quantity, price, name) {
  let cartItem = {
    quantity,
    price,
    name,
    addInventory(amount) {
      this.currentInventory += amount;
    },
    get inventory() {
      return this.currentInventory;
    },
    set inventory(amount) {
      this.currentInventory = amount;
    },
    hasInventory() {
      return this.currentInventory > 0;
    },
    get cost() {
      return this.quantity * this.price;
    },
  };
  return cartItem;
}

export const MakeColored = (item, colors) => ({
  colors: colors ? colors : ["black"],
  addColor(color) {
    item.colors.push(color);
  },
});
export const MakeSized = (item, sizes) => ({
  sizes: sizes ? sizes : ["small", "medium", "large"],
  hasLarge() {
    return item.sizes.indexOf("large") >= 0;
  },
});
export function ColoredSized({ quantity, price, name, sizes, colors }) {
  let newItem = CartItem2(quantity, price, name);
  return Object.assign(
    newItem,
    MakeSized(newItem, sizes),
    MakeColored(newItem, colors)
  );
}
