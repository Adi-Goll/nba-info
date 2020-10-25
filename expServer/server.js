const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const id = 193;

const addQuery = (req, res, next) => {
  req.query.id = `id`;
  next();
};

app.get(`/`, addQuery, express.query(), GetPlayer);

let returnObj = {
  name: 'name',
  jerseyNumber: 'number',
};

function GetPlayer(req, res) {
  // id = req.param('id');
  res.json(returnObj);
  console.log(req.params.id);
}

axios({
  method: 'get',
  url: `http://api.isportsapi.com/sport/basketball/player?api_key=5Wg8xgsxftGDBBZ6&`,
  responseType: 'application/json',
}).then(function (response) {
  result = response.data;
  player = result.data;
  returnObj.name = result.data[0].name;
  returnObj.jerseyNumber = result.data[0].number;
});
