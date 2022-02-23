const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3060;

app.use(cors());
app.listen(PORT, console.log.bind(console, `App listening to http://:${PORT}`));