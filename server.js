const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const app = express();
// parse incoming string or array of data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json())
// serve all other files with initial call
app.use(express.static('public'))

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


const { animals } = require('./data/animals.json')

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})