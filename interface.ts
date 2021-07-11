// Interface คือ การตั้งชื่อให้กับ object type สามารถใช้ object type นั้นซ้ำ ๆ ได้หลายครั้ง โดยไม่ต้องสร้างใหม่

// ถ้าปกติต้องสร้าง object type ใหม่ทุกครั้งที่ใช้งาน 
const userA: { username: string; email: string } = {
  username: "Tom",
  email: "tom@demo.com"
}

const userB: { username: string; email: string } = {
  username: "Bird",
  email: "bird@demo.com"
}

// Interface
interface User { username: string; email: string }

const userC: User = {
  username: "Bob",
  email: "bob@demo.com",
  password: "1234"
}

// ถ้าระบุ interface เพิ่มเป็นชื่อเดิม จะเป็นการ merge รวมกัน (เพิ่ม properties)
interface User { password: string }

// สร้าง object type ใหม่ จากฐานเดิม (extends)
interface newUser extends User {
  age: number
}

const userD: newUser = {
  username: "Pop",
  email: "pop@demo.com",
  password: "1234",
  age: 18
}