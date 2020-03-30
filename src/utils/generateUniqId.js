const crypto = require("crypto");
module.exports = function generateUniq() {
  return crypto.randomBytes(4).toString("HEX");
};
