// null / undefined
// ใช้ต้องระวัง! อาจทำให้เกิด error (ตั้ง strictNullChecks ใน config เพื่อแจ้ง error ตอน compile)

// จะเกิด error เมื่อใส่ค่า null
const calculateCartAmount1 = (cart: { qty: number; price: number } | null | undefined) => {
  return cart.qty * cart.price
}

const calculateCartAmount2 = (cart: { qty: number; price: number } | null | undefined) => {
  if (cart) {
    return cart.qty * cart.price
  }
  return 0
}

const amount = calculateCartAmount2(null)
console.log("amount: ", amount)