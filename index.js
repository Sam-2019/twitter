import express from "express";
import Twitter from "./twitter/index.js";
const app = express();

let user = new Twitter();
user.hello();

const PORT = 5001;

app.listen(PORT, () => console.log(`Rnnning on PORT ${PORT}`));