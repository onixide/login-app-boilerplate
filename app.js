const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

require("./init/error-handling")();
require("./init/db")();

app.use(helmet());
app.use(morgan('tiny'));

require("./init/routes")(app);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening ${port}!`));