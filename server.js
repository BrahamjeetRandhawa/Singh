// express & dotenv setup

require('dotenv').config();
const express = require('express');
const app = express();

app.use((req, res) => {
    console.log('404 error at URL:' + req.url);
    res.status(404).send('404 error at URL:' + req.url);
});

// Start server **ALTIJD ONDERAAN**
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
    console.log(
        `http://localhost:${process.env.PORT}`);
});