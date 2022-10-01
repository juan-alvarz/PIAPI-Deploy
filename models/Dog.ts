import { DogI } from "../types";

const { Schema, model } = require("mongoose");

const DogSchema: DogI = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    lifeSpan: {
      type: String,
      required: true,
    },
    temperament: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      default:
        "https://img2.freepng.es/20180415/jdw/kisspng-logo-silhouette-dog-bone-dog-5ad41d4b59e7d5.7560651515238505713683.jpg",
    },
    from: {
      type: String,
      default: "API",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const DogModel = model("Dog", DogSchema);
export = DogModel;
