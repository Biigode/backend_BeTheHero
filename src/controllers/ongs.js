const generateID = require("../utils/generateUniqId");
const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { nome, email, whatsapp, city, uf } = req.body;
    const id = generateID();
    await connection("ongs").insert({ id, nome, email, whatsapp, city, uf });
    return res.status(201).json({ id: id });
  },
  async recover(req, res) {
    const response = await connection("ongs").select("*");

    return res.status(200).json(response);
  }
};
