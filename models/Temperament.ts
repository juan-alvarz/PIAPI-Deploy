import { DogI } from "../types";
import DogModel from "../models/Dog";
const { Schema, model } = require("mongoose");

const TemperamentSchema = new Schema({
  name: {
    type: String,
  },
});

const TempModel = model("Temperament", TemperamentSchema);
export = TempModel;
