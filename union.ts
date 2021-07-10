// Union type คือ กำหนด type ให้กับตัวแปรมากกว่า 1 type ได้

let answer: string | number
answer = 'x'
answer = 123
// answer = true เกิด error เพราะ type ไม่ถูกต้อง

let mixedArray: (string | number)[] = []
mixedArray.push('x')
mixedArray.push(123)
// mixedArray.push(false) เกิด error เพราะ type ไม่ถูกต้อง

let myObject: { a: number; b: number } | { a: string; b: string}
myObject = { a: 1, b: 2 }
myObject = { a: "x", b: "y" }