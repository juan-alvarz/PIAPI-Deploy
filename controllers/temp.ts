const axios = require("axios");
const { MY_APPI_KEY } = process.env;
require("dotenv").config();
import TempModel from "../models/Temperament";

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

export const temperamento = async (req: any, res: any) => {
  const data = await TempModel.find({});
  return res.status(200).send(data);
};
