const express = require('express');
const clientes = require('./fakedb');
const pessoas = require('./fakedb')

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log(`Server's up in door ${process.env.PORT}`));

// Rota Nome
app.get("/name", function(request, response){
  const {name} = request.headers;
  response.status(200).json(
    {
      "messages": [
        {"text": `Olá ${name}!`},
        {"text": `Didite "sair" a qualquer momento para encerrar o chat.`}
      ]
   }
  );
});

// Rota Pedido
app.get('/pedido', function(request, response){
  const {pedido} = request.headers;
  response.status(200).json(
    {
      "messages": [
        {"text": `Ok!`},
        {"text": `Pedido recebido`}
      ]
   }
  );
});

// Rota para cadartrar cliente
app.post('/cadastro', function(req, res){
  const { fullname, endereco, tell, pedido } = req.body;

  clientes.push({
    "id": clientes.length + 1,
    "dados": {
      fullname, 
      endereco,
      tell, 
    },
    pedido
  });

  res.status(201).json(
    {
      "messages": [
        {"text": `Cadastro feito!!!`}
      ]
   }
  );
  
});