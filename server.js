// express & dotenv setup

require('dotenv').config();
const express = require('express'); 
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));
app.set('view engine', 'ejs');
app.set('views', 'views');


// Routes
app.get('/', (req, res) => {
    const userInput = req.query.name || "";
    res.render('home.ejs', { userInput });
});

app.get('/products', (req, res) => {
    res.render('products.ejs');
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
});

app.get('/deals', (req, res) => {
    res.render('deals.ejs');
});

app.get('/gaming', (req, res) => {
    res.render('gaming.ejs');
});

app.get('/office', (req, res) => {
    res.render('office.ejs');
});
// End of routes

// Error handling
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


