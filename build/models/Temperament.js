"use strict";
const { Schema, model } = require("mongoose");
const TemperamentSchema = new Schema({
    name: {
        type: String,
    },
});
const TempModel = model("Temperament", TemperamentSchema);
module.exports = TempModel;
