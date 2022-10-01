"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose = require("mongoose");
function dbConnect() {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if (!err) {
            console.log("connected with Atlas successfully");
        }
        else {
            console.log("error trying connected with Atlas");
        }
    });
}
exports.dbConnect = dbConnect;
