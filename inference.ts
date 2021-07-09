// Type Annotation vs Type Inference
// Type Inference ให้ ts ระบุ type เอง
// ถ้าเราแค่ประกาศตัวแปรไว้เราควร annotation แต่ถ้ากำหนดค่าให้ ts ระบุ type เอง

let num: number
num = 5

let greet1 = "Hi!"
const greet2 = "Hello"

let isEqual1 = true
const isEqual2 = false

const numbers = [1, 2, 3]
const names = ["tom", "jame"]

const user = {
  name: "tim",
  email: "tim@test.com",
  password: "123456",
  age: 18,
  gender: "Male"
}

// ด้านขวาของ => คือ return type
const sum1 = (x: number, y: number) => {
  return x + y
}