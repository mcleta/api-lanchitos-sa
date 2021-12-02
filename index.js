const express = require('express');

const app = express();

app.use(express.json());

app.listen(process.env.PORT || 3000, () => console.log(`Server's up in door ${process.env.PORT}`));

// Rota Nome
app.get("/name", function(request, response){
  const {name} = request.headers;
  response.status(200).json(
    {
      "messages": [
        {"text": `Olá ${name}!`}
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
        {"text": `Confirma o pedido?`},
        {"text": `${pedido}`}
      ]
   }
  );
});

// Rota Endereço
app.get('/endereco', function(request, response){
  const {endereco} = request.headers;
  response.status(200).json(
    {
      "messages": [
        {"text": `Ok!`}
      ]
   }
  );
});