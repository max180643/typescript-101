// Tuple --> array ที่มีขนาดแน่นอน, type ที่อยู่ในแต่ละตำแหน่งต้องต่างกัน, ลำดับสลับกันไม่ได้

let client: [string, number, boolean]
client = ['Tom', 35, true]
// client = [35, 'Tom', true] เกิด error
// client = ['Tom', 35, true, 'Tom', 35, true] เกิด error ว่าค่าเกิดขนาด

console.log(client[0])
console.log(client[1])
console.log(client[2])
// console.log(client[3]) จะเกิด error เกิน index ที่มี

// สามารถใช้ method ของแต่ละ type ได้
client[0].toUpperCase()

// ถ้าเป็น array ปกติ
let client1: (string | number | boolean)[]
client1 = ['Tom', 35, true]
client1 = [35, 'Tom', true]
client1 = ['Tom', 35, true, 'Tom', 35, true]
