const express = require('express');

const app = express();

app.use(express.json())

app.listen(process.env.PORT || 3000, () => console.log(`Server's up in door ${process.env.PORT}`));

app.get("/cardapio", function(request, response){
  const {name} = request.headers;
  response.status(200).json(
    {
      "messages": [
        {"text": `Olá ${name}!`}
      ]
   }
  );
});

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