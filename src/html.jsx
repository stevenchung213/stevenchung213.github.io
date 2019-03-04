const Html = (body, title) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:500" rel="stylesheet">
      <title>${title}</title>
    </head>
    <body>
      <div id="main">${body}</div>
    </body>
  </html>
`;

export default Html;