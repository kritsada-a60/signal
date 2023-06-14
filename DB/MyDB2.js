const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// สร้างการเชื่อมต่อกับ MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// สร้างฟอร์แมตข้อมูล
const MyModel = mongoose.model('MyModel', {
  UID: String,
  Name: String,
  SignalName: String,
  Package: String,
  PaymentDateTime: Date,
  StartFormat: String,
  StartDate: Date,
  EndDate: Date,
  Tax: Number,
  Vax: Number,
  Price: Number,
  Status: String,
  Action: String,
  SignalType: String
});

const app = express();

// ให้ Express.js ใช้งาน Body Parser
app.use(bodyParser.json());

// เพิ่มข้อมูล
app.post('/data', (req, res) => {
  const data = req.body; // ข้อมูลต้องการเพิ่มเข้ามา
  MyModel.create(data, (err, newData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating data');
    } else {
      res.send(newData);
    }
  });
});

// แก้ไขข้อมูล
app.put('/data/:id', (req, res) => {
  const id = req.params.id; // UID ของข้อมูลที่ต้องการแก้ไข
  const newData = req.body; // ข้อมูลใหม่ที่ต้องการแก้ไขที่ได้มาจากแอปหรือเว็บที่ทำอยู่
  MyModel.findByIdAndUpdate(id, newData, { new: true }, (err, updatedData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating data');
    } else {
      res.send(updatedData);
    }
  });
});

// ลบข้อมูล
app.delete('/data/:id', (req, res) => {
  const id = req.params.id; // ไอดีของข้อมูลที่ต้องการลบ
  MyModel.findByIdAndRemove(id, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting data');
    } else {
      res.send('Data deleted');
    }
  });
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
