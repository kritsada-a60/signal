const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// สร้างข้อมูลเบื้องต้น
let data = [
  {
    UID: "UID-1",
    Name: "John",
    SignalName: "Signal 1",
    Package: "Package 1",
    PaymentDateTime: "2023-05-25 10:30:00",
    ActivationFormat: "Format 1",
    StartDate: "2023-05-25",
    EndDate: "2023-06-25",
    Status: "Active",
    Action: "Action 1"
  },
  {
    UID: "UID-2",
    Name: "Jane",
    SignalName: "Signal 2",
    Package: "Package 2",
    PaymentDateTime: "2023-05-24 15:45:00",
    ActivationFormat: "Format 2",
    StartDate: "2023-05-24",
    EndDate: "2023-06-24",
    Status: "Inactive",
    Action: "Action 2"
  }
];

// รับข้อมูลทั้งหมด
app.get('/data', (req, res) => {
  res.json(data);
});

// รับข้อมูลตาม UID
app.get('/data/:uid', (req, res) => {
  const uid = req.params.uid;
  const item = data.find(item => item.UID === uid);
  if (!item) {
    res.status(404).json({ error: 'Data not found' });
  } else {
    res.json(item);
  }
});

// เพิ่มข้อมูลใหม่
app.post('/data', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// แก้ไขข้อมูลตาม UID
app.put('/data/:uid', (req, res) => {
  const uid = req.params.uid;
  const updatedItem = req.body;
  const index = data.findIndex(item => item.UID === uid);
  if (index === -1) {
    res.status(404).json({ error: 'Data not found' });
  } else {
    data[index] = { ...data[index], ...updatedItem };
    res.json(data[index]);
  }
});

// ลบข้อมูลตาม UID
app.delete('/data/:uid', (req, res) => {
  const uid = req.params.uid;
  const index = data.findIndex(item => item.UID === uid);
  if (index === -1) {
    res.status(404).json({ error: 'Data not found' });
  } else {
    const deletedItem = data.splice(index, 1)[0];
    res.json(deletedItem);
  }
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
