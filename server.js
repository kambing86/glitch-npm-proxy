const express = require('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(
  '/search/*',
  proxy({ target: 'https://www.npmjs.com', changeOrigin: true })
);
app.use(
  '*',
  proxy({ target: 'https://registry.npmjs.org', changeOrigin: true })
);


const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
