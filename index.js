var app = require('./config/custom-express')();
require('dotenv').config()

const port = process.env.SERVER_PORT;

app.listen(port, function(){
  console.log(`Servidor rodando na porta ${port}.`);
});