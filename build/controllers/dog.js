"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDog = exports.createDog = exports.getDogById = exports.getDogs = void 0;
const Dog_1 = __importDefault(require("../models/Dog"));
require("dotenv").config();
const axios = require("axios");
const { MY_APPI_KEY } = process.env;
const getDogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Dog_1.default.find({});
        const nameDog = req.query.name !== undefined ? req.query.name : undefined;
        if (nameDog !== undefined) {
            const dogByName = yield Dog_1.default.find({
                name: { $regex: ".*" + nameDog + ".*", $options: "<i>" },
            });
            if (!dogByName) {
                return res.status(404).json({ message: "inexistent dog" });
            }
            return res.status(200).json(dogByName);
        }
        return res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDogs = getDogs;
const getDogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (id) {
            const dogById = yield Dog_1.default.find({ _id: id });
            if (Object.keys(dogById).length === 0) {
                return res.status(404).json({ message: "inexistent id" });
            }
            return res.status(200).json(dogById);
        }
        return res.status(400).json({ message: "id is required" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDogById = getDogById;
const createDog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, height, weight, lifeSpan, temperament, image } = req.body;
        const newDog = new Dog_1.default({
            name,
            height,
            weight,
            lifeSpan,
            temperament,
            image,
            from: "DB",
        });
        yield newDog.save();
        return res.status(200).json(newDog);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createDog = createDog;
const deleteDog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const { id } = req.params;
        if (id) {
            const dogById = yield Dog_1.default.find({ _id: id });
            if (Object.keys(dogById).length === 0) {
                return res.status(404).json({ message: "inexistent id" });
            }
            yield Dog_1.default.deleteOne({ _id: id });
            return res.status(200).json(dogById);
        }
        return res.status(400).json({ message: "id is required" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteDog = deleteDog;
