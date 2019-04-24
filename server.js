// server.js
// where your node app starts

// init project
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

// http://expressjs.com/en/starter/basic-routing.html
app.get('*', async function(request, response) {
  const res = await axios.get(`https://registry.npmjs.org${request.originalUrl}`)
  response.json(res.data);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
