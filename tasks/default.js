'use strict';

const project = require('../package');

module.exports = function() {
  return function() {
    let message = `\nGulpish Demo v${project.version}\n`;
    message += `Copyright 2016 Periphore\n`;
    message += `Default task override\n`;
    console.log(message);
  };
};
