const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const product = require('./api/product')


const PORT = 9050;

app.set("view engine","hbs")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use("/", product);

app.listen(PORT, () => {
    console.log('Server is running in port ' + PORT);
});

