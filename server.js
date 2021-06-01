require('dotenv').config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const port = process.env.PORT || 3000;

const app = express();

const upload = multer({ dest: 'uploads/' });



app.use(cors());

app.use('/public', express.static(`${__dirname}/public`));



app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/view/index.html`);
});



app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    res.json({
      error: 'The file is required'
    });
  }

  const { originalname, mimetype, size } = req.file;

  res.json({
    name: originalname,
    type: mimetype,
    size: size,
  });
});



app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});