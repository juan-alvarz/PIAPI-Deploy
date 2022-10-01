const { dogModel } = require("../models/index.js");
const DogModel = require("../models/Dog.js");
const axios = require("axios");
const { MY_APPI_KEY } = process.env;

require("dotenv").config();

// obtain dogs, by name, and general
const getDogs = async (req, res) => {
  try {
    const data = await DogModel.find({});
    const nameDog = req.query.name !== undefined ? req.query.name : undefined;
    if (nameDog !== undefined) {
      const dogByName = await DogModel.find({
        name: { $regex: ".*" + nameDog + ".*", $options: "<i>" },
      });
      if (!dogByName) {
        return res.status(404).json({ message: "inexistent dog" });
      }
      return res.status(200).json(dogByName);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const getDogById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const dogById = await DogModel.find({ _id: id });
      if (Object.keys(dogById).length === 0) {
        return res.status(404).json({ message: "inexistent id" });
      }
      return res.status(200).json(dogById);
    }
    return res.status(400).json({ message: "id is required" });
  } catch (error) {
    console.log(error.message);
  }
};

const createDog = async (req, res) => {
  try {
    const { name, height, weight, lifeSpan, temperament, image } = req.body;
    const newDog = new DogModel({
      name,
      height,
      weight,
      lifeSpan,
      temperament,
      image,
      from: "DB",
    });
    await newDog.save();
    return res.status(200).json(newDog);
  } catch (error) {
    console.log(error);
  }
};

const deleteDog = async (req, res) => {
  const { id } = req.params;
  try {
    const { id } = req.params;
    if (id) {
      const dogById = await DogModel.find({ _id: id });
      if (Object.keys(dogById).length === 0) {
        return res.status(404).json({ message: "inexistent id" });
      }
      await DogModel.deleteOne({ _id: id });
      return res.status(200).json(dogById);
    }

    return res.status(400).json({ message: "id is required" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getDogs,
  getDogById,
  createDog,
  deleteDog,
};
