// Dynamic type vs Static type

// 1. string --> 'hello', "world", `true`
// 2. number --> 10, 8.75
// 3. boolean --> true / false

let str: string
str = "10"
// console.log(typeof str)

const sum = (a: number, b: number) => {
  return a + b
}

const total = sum(5, 10)
console.log(total)