// Object Type ไม่ใช่ primitive value

// case ที่ไม่ใช้จริง แต่ทำได้ไม่ฟ้อง error
// user = [1, 2, 3]
// user = null
// user = undefined

// ไม่ระบุว่ามี Properties เป็น type อะไรบ้าง มีกี่ Properties
// let user: object
// user = {
//   name: "Tom",
//   email: "Tom@demo.com",
//   age: 20
// }
// user = { username: "Tim" }

// ระบุ Properties ว่ามี type อะไร
// let user: { name: string; email: string; age: number}
// user = {
//   name: "Tom",
//   email: "Tom@demo.com",
//   age: 20
// }

// assign ค่าโดยตรง โดยไม่ต้องระบุ type (Best)
let user = { name: "Tom", email: "Tom@demo.com", age: 20 }

console.log(user)