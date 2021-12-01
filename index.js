const express = require('express');
const chatFuel = require('chatfuel-api');

const app = express();

app.use(express.json())

app.listen(3000, () => console.log(`Server's up in door 3000`));

app.get("/mensagens", function(request, response){
  response.status(200).json(
    {
      "messages": [
        {"text": "Welcome to the Chatfuel Rockets!"},
        {"text": "What are you up to?"}
      ]
   }
   );
});