const TempModel = require("../models/Temperament.js");

const temperament = async (req, res) => {
  const data = await TempModel.find({});
  return res.status(200).json(data);
};

module.exports = {
  temperament,
};
