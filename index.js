const express = require('express');
const ip = require('ip');

const app = express();

/* app.get('/', (req, res) => {
  res.send('Hello Express app!')
}); */

app.use(express.static('public'));

app.listen(5500, () => {
  console.log('Server started!');
  console.log('Server avaliable at:');
  console.log('http://127.0.0.1:5500/');
  console.log('http://' + ip.address() + ':5500/');
});
