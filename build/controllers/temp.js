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
exports.temperamento = void 0;
const axios = require("axios");
const { MY_APPI_KEY } = process.env;
require("dotenv").config();
const Temperament_1 = __importDefault(require("../models/Temperament"));
/* export const temperamento = async (req: any, res: any) => {
    const data = TempModel.find({})
  const apiRes = await axios.get(
    `https://api.thedogapi.com/v1/breeds/?api_key=${MY_APPI_KEY}`
  );
  const apiInfo = await apiRes.data;
  let temp: string[] = await apiInfo.map((el: any) => {
    if (el.temperament) {
      return el.temperament.split(", ");
    }
  });
  temp = temp.flat();
  temp = temp.filter((item, index) => {
    return temp.indexOf(item) === index;
  });
  //console.log(temp);
  for (let i = 0; i < temp.length; i++) {
    let aux = temp[i];
    await TempModel.create({ name: aux });
  }
  console.log("done");
  const dataTemp = await TempModel.find({});
  return res.status(200).send(dataTemp);
}; */
const temperamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Temperament_1.default.find({});
    return res.status(200).send(data);
});
exports.temperamento = temperamento;
