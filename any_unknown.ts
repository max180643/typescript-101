// Any Type คือ ไม่ต้อง check type สำหรับตัวแปรนี้

let a: any
a = 1
a = "Hello"
a = true
a = [1, 2]
a = { a: 1, b: 2 }
console.log("a: ", a)

// Unknown Type คือ บางส่วนเหมือน any แต่จะ check type ให้ (เป็น Type Safe ของ any)
let x: unknown
x = 2
x = 'b'
x = false
x = ['a', 'b']
x = { a: 3, b: 4 }
console.log("x: ", x)

// ความแตกต่าง
let a1: any
let a2: unknown

a1 = 1
a2 = 2

const b1 = a1.toUpperCase() // ไม่ฟ้อง error
const b2 = a2.toUpperCase() // ฟ้อง error ว่า toUpperCase() ไม่มีใน type number