const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');  // ✅ Only once

const app = express();

// ✅ Middleware
app.use(cors());              
app.use(express.json());      

// ✅ MongoDB Connection
mongoose.connect('mongodb://localhost:27017/bookreview', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// ✅ Routes
app.use('/api/books', bookRoutes);  // ✅ This mounts the /api/books route

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
