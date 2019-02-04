const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("./init/error-handling")();
require("./init/db")();

app.use(helmet());
app.use(morgan('tiny'));



app.get('/', (req, res, next) => {
    res.send("XXX");
});


app.use(function (error, req, res, next) {
    res.status(500).send("Błąd serwera. Z ostatniego middleware. ");
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening ${port}!`));