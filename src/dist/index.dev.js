"use strict";

var app = require('./app');

require('./database');

function main() {
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(app.listen(3000));

        case 2:
          console.log('Server is running');

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

main();