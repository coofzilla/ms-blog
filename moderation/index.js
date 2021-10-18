const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/posts', (req, res) => {});

app.listen(4003, () => {
  console.log('listening on 4003');
});
