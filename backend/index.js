const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('',router);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/flutter-third-party-auth', { useNewUrlParser: true, useUnifiedTopology: true }).then(async res => {
    console.log('our database is running on port 27017');
})
app.listen(PORT, console.log(`server is running on port${PORT}`))