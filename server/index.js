import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Main from '../src/components/Main.jsx';
import Html from '../src/html.jsx';

const port = 10000;
const app = express();


//server-side render route
app.get('/', (req, res) => {

  const main = renderToString(<Main/>);
  const title = "Hello~";

  res.send(Html(main, title));
});


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
