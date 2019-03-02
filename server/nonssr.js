const express = require('express');
const path = require('path');

const port = 10000;
const app = express();


app.use(express.static(path.resolve(__dirname + '/../temp')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../temp/index.html'));
});


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
