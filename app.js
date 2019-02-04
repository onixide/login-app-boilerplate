const express = require("express");
const app = express();

app.get('/', (req, res, next) => {
    res.send("XXX");
    });


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening ${port}!`));