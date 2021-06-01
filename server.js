require('dotenv').config();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();



app.use(cors());

app.use('/public', express.static(`${__dirname}/public`));



app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/view/index.html`);
});



app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});