const express = require('express');
const path = require('path');
const compression = require('compression');

const port = 10000;
const app = express();

app.use(compression());

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(express.static(path.resolve(__dirname + '/../dist')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
