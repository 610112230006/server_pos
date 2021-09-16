const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use("/api/v1/product", require("./router/products"));
app.use("/api/v1/order", require("./router/orders"));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})