var User = require('../models/User');

function getIndex(req, res) {
  res.send('Index page babay!');
}

module.exports = {
  getIndex: getIndex
};
