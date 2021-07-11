// Type alias คือ การตั้งซื่อใหม่ให้กัับ type ที่มีอยู่
// ไม่นิยมใช้กับ primitive type ส่วนใหญ่จะใช้กับ union type
type MyString = string
type StringBoolean = string | boolean

type role = 'CLIENT' | 'ADMIN' | 'SUPER_ADMIN'

// object type --> type alias ไม่สามารถ extends ได้
type Employee = {
  username: string;
  email: string
}