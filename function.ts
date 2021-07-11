// Function type
// parameter ตัวไหนไม่จำเป็นต้องมี (optional) ให้ใส่เครื่องหมาย '?'
// optional parameter จะต้องอยู่หลัง required parameter เท่านั้น อยู่ก่อนไม่ได้

function addNums(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c
  }
  return a + b
}

addNums(5, 8)
addNums(5, 8, 10)

// void function ไม่มีการ return ค่า

function showAddNums(a: number, b: number): void {
  console.log(a + b)
}

// default value
function addNum2(a: number, b: number = 10): number {
  return a + b
}

// parameter เป็น array (สามารถใช้ method array)
function sumNums(...nums: number[]): number {
  return nums.reduce((sum, num) => sum + num, 0)
}

sumNums(1, 2, 3, 4, 5)
