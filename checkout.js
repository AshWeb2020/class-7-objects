export function checkOut(items, calcTax) {
  const totalCost = items.reduce((total, item) => total + item.cost, 0);
  const tax = calcTax(items);
  return totalCost + tax;
}

export function GhanaVat(items) {
  const totalTax = items.reduce((tax, item) => tax + item.cost * 0.125, 0);
  return totalTax;
}

export function NigeriaVat(items) {
  const totalTax = items.reduce((tax, item) => tax + item.cost * 0.075, 0);
  return totalTax;
}

export function countryCheckOut(items, countryCode) {
  let total;
  switch (countryCode) {
    case "GH":
      total = checkOut(items, GhanaVat);
      break;
    case "NG":
      total = checkOut(items, NigeriaVat);
    default:
      total = checkOut(items, () => 0);
  }
  return total;
}
