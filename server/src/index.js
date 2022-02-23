const express = require('express');
const app = express();
const PORT = 3060;
app.listen(PORT, console.log.bind(console, `App listening to http://:${PORT}`));