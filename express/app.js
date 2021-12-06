const express = require('express')
const app  = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRouter);
app.use(shopRouter);

app.listen(3000);
