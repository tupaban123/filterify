const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const tokenRoutes = require('./routes/token');
const userRoutes = require('./routes/user');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);   
app.use('/token', tokenRoutes); 
app.use('/user', userRoutes);   

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});