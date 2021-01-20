"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();
router.get('/', function (req, res) {
  return res.json({
    message: 'Hello World'
  });
});
module.exports = router;