export const calculateDiscountPrice = (price, discount) => {
  return Math.floor(price * (discount / 100) * 100) / 100
}
