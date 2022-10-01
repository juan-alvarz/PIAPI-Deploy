import DogModel from "../models/Dog";
import { DogI } from "../types";
require("dotenv").config();
const axios = require("axios");
const { MY_APPI_KEY } = process.env;

export const getDogs = async (req: any, res: any) => {
  try {
    const data: DogI[] = await DogModel.find({});
    const nameDog: string | undefined =
      req.query.name !== undefined ? req.query.name : undefined;
    if (nameDog !== undefined) {
      const dogByName: DogI = await DogModel.find({
        name: { $regex: ".*" + nameDog + ".*", $options: "<i>" },
      });
      if (!dogByName) {
        return res.status(404).json({ message: "inexistent dog" });
      }
      return res.status(200).json(dogByName);
    }
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const getDogById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    if (id) {
      const dogById: DogI = await DogModel.find({ _id: id });
      if (Object.keys(dogById).length === 0) {
        return res.status(404).json({ message: "inexistent id" });
      }
      return res.status(200).json(dogById);
    }
    return res.status(400).json({ message: "id is required" });
  } catch (error) {
    console.log(error);
  }
};

export const createDog = async (req: any, res: any) => {
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

export const deleteDog = async (req: any, res: any) => {
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
    console.log(error);
  }
};
