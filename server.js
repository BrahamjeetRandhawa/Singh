// express & dotenv setup

require('dotenv').config();
const express = require('express'); 
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/home', (req, res) => {
    const userInput = req.query.name || "";
    res.render('home.ejs', { userInput });

    

});



app.use((req, res) => {
    console.log('404 error at URL:' + req.url);
    res.status(404).render('home.ejs', { userInput: "" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500: server error');
});

// Start server **ALTIJD ONDERAAN**
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
    console.log(
        `http://localhost:${process.env.PORT}`);
});






// import 'dotenv/config';
// import express from 'express';
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// // Define a more user-friendly route
// app.get('/home', (req, res) => {
//     const userInput = req.query.name || "";
//     res.render('home', { userInput }); // No need for .ejs extension here
// });

// // 404 error handler
// app.use((req, res) => {
//     console.log('404 error at URL: ' + req.url);
//     res.status(404).render('home', { userInput: "" }); // Render home with empty input
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('500: server error');
// });

// // Start server **ALTIJD ONDERAAN**
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port: ${process.env.PORT}`);
//     console.log(`http://localhost:${process.env.PORT}`);
// });
