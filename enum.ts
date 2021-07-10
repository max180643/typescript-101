// Enum (Enumerated type)

enum Role {
  CLIENT,
  EDITOR,
  ADMIN,
  SUPERADMIN
}

console.log(Role)
console.log(Role.CLIENT)
console.log(Role[0])

enum Role1 {
  CLIENT = 1,
  EDITOR = 3,
  ADMIN = 5,
  SUPERADMIN = 10
}

enum Role2 {
  CLIENT = 'CLIENT',
  EDITOR = 'EDITOR',
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN'
}

console.log(Role2.EDITOR)

const editor: Role2 = Role2.EDITOR

console.log(editor)