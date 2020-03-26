const connection = require("../database/connection");
module.exports = {
  async store(req, res) {
    const { id } = req.body;
    const response = await connection("ongs")
      .where("id", id)
      .select("nome")
      .first();
    if (!response) {
      return res.status(400).json({ error: "No ong with this ID" });
    }
    return res.status(200).json(response);
  }
};
