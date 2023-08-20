/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();

// TODO: adapt publicPath field
app.use(express.static(path.join(__dirname, 'example/dist')));

const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
