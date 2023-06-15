const axios = require('axios');
const getConfig = require('../config/api');

var getTickets = async (req, res) => {
    const config = getConfig('tickets');
    await axios(config)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
          console.log(error);
      });
};

module.exports = {
    getTickets
}
