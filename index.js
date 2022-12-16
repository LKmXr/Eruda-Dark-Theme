const express = require('express');

const app = express();

/* app.get('/', (req, res) => {
  res.send('Hello Express app!')
}); */

app.use(express.static('public'));

app.listen(5500, () => {
  console.log('Server started!');
});
