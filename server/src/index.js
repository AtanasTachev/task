const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3060;

const routes = require('./routes');


app.use(cors());
app.use(routes);

app.listen(PORT, console.log.bind(console, `App listening to http://localhost:${PORT}`));