const express = require('express')
const app = express()
const port = 5566 || process.env.port;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
