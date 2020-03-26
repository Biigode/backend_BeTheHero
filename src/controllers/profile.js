const connection = require("../database/connection");
module.exports = {
  async recoverEspecifict(req, res) {
    const ong_id = req.headers.authorization;
    const response = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");
    return res.status(200).json(response);
  }
};
