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

app.get('/test', function(req, res){
  const {dec} = req.headers;

  res.status(200).json(
    {
      "messages": [
        {
          "text":  "Did you enjoy the last game of the CF Rockets?",
          "quick_replies": [
            {
              "title":"Loved it!",
              "block_names": ["Block 1", "Block 2"]
            },
            {
              "title":"Not really...",
              "url": "https://rockets.chatfuel.com/api/sad-match",
              "type":"json_plugin_url"
            }
          ]
        }
      ]
    }
  );
});