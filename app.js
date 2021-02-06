const express = require("express");

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send({
    status: 200,
    message: 'Successfully loaded homepage',
    data: [
      {
        firstName: 'Ezrqn',
        lastName: 'Kemboi'
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Server running at Port: ${port}`);
})