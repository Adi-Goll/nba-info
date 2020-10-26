const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const axios = require('axios');
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const addQuery = (req, res, next) => {
  id = req.query.id;
  next();
};

app.get(`/`, addQuery, express.query(), GetPlayer);

let returnObj = {
  name: 'name',
  jerseyNumber: 'number',
};

function GetPlayer(req, res) {
  axios({
    method: 'get',
    url: `http://api.isportsapi.com/sport/basketball/player?api_key=5Wg8xgsxftGDBBZ6&playerId=${id}`,
    responseType: 'application/json',
  })
    .then(function (response) {
      let result = response.data;
      returnObj.name = result.data[0].name;
      returnObj.jerseyNumber = result.data[0].number;
    })
    .catch(function (error) {
      console.log('error');
    });

  res.json(returnObj);
}
