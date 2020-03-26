const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { nome, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    await connection("ongs").insert({ id, nome, email, whatsapp, city, uf });
    return res.status(201).json(id);
  },
  async recover(req, res) {
    const response = await connection("ongs").select("*");
    return res.status(200).json(response);
  }
};
