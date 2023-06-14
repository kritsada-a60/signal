const express = require('express');
const app = express();
const port = 3000; // เปลี่ยนตามความต้องการ

// สร้างฐานข้อมูลที่จะใช้เก็บข้อมูลผู้ใช้งาน
const usersDB = [];

// เพิ่มข้อมูลผู้ใช้งาน
app.post('/users', (req, res) => {
  const { name, surname, phoneNumber } = req.body;
  const user = {
    name: name,
    surname: surname,
    phoneNumber: phoneNumber
  };
  
  usersDB.push(user);
  res.send('เพิ่มข้อมูลผู้ใช้งานเรียบร้อยแล้ว');
});

// แก้ไขข้อมูลผู้ใช้งาน
app.put('/users/:name/:surname', (req, res) => {
  const { name, surname } = req.params;
  const { phoneNumber } = req.body;
  const user = usersDB.find(user => user.name === name && user.surname === surname);
  
  if (user) {
    user.phoneNumber = phoneNumber;
    res.send('อัปเดตข้อมูลผู้ใช้งานเรียบร้อยแล้ว');
  } else {
    res.status(404).send('ไม่พบข้อมูลผู้ใช้งาน');
  }
});

// ลบข้อมูลผู้ใช้งาน
app.delete('/users/:name/:surname', (req, res) => {
  const { name, surname } = req.params;
  const index = usersDB.findIndex(user => user.name === name && user.surname === surname);
  
  if (index !== -1) {
    usersDB.splice(index, 1);
    res.send('ลบข้อมูลผู้ใช้งานเรียบร้อยแล้ว');
  } else {
    res.status(404).send('ไม่พบข้อมูลผู้ใช้งาน');
  }
});

// แสดงรายชื่อผู้ใช้งานทั้งหมด
app.get('/users', (req, res) => {
  res.send(usersDB);
});

app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์ทำงานอยู่ที่ http://localhost:${port}`);
});
