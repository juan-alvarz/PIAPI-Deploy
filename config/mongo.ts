const mongoose = require("mongoose");

export function dbConnect() {
  const DB_URI: string | undefined = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err: Error, res: Response) => {
      if (!err) {
        console.log("connected with Atlas successfully");
      } else {
        console.log("error trying connected with Atlas");
      }
    }
  );
}
