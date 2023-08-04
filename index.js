const express = require("express");

const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
//settings
app.set("PORT", process.env.PORT || 3500);

//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

//routes
app.use("/", require("./routes/index"));

app.listen(app.get("PORT"), () =>
  console.log(`Server listen at Port ${app.get("PORT")}`)
);
