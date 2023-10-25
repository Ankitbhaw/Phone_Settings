var mongoose = require("mongoose");

mongoose
  .connect(process.env.URL)
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;