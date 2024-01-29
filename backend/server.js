const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sampleRoute = require('./routes/sampleRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://suraz:karn@socialmedia.obnvvqf.mongodb.net/kareernest', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/sample', sampleRoute);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
