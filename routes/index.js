var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var output = {
    'ipaddress': req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    'language': req.headers["accept-language"].substring(0,2),
    'software': req.headers["user-agent"].match(/\((.+?)\)/i)[1]
  };
  
	res.json(output);
  
});

module.exports = router;
