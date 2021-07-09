// Type Annotation vs Type Inference
// Type Annotation คือ การกำหนด type ให้กับ ตัวแปร, const, array, object, function

let num: number
num = 5

let greet1: string = "Hi!"
const greet2: string = "Hello"

let isEqual1: boolean = true
const isEqual2: boolean = false

const numbers: number[] = [1, 2, 3]
const names: Array<string> = ["tom", "jame"]

const user: { name?: string; email: string; password: string; age: number; gender: "Male" | "Female" } = {
  // name: "tim",
  email: "tim@test.com",
  password: "123456",
  age: 18,
  gender: "Male"
}

// ด้านขวาของ => คือ return type
const sum1: (a: number, b: number) => number = (x: number, y: number): number => {
  return x + y
}