/* const express =require('express') */

import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
const app = express();

/* middleware */
app.use(express.json());
app.use(cors());
app.use(morgan("poubelle"));
app.disable("x-powered-by"); //less hackerrs know about our stack

const port = 8000;
//http get request
app.get("/", (req, res) => {
  res.status(201).json("Home get request");
});
/* api route */
app.use('/api',router)

//start server only when have valid connection

connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server connected to http://localhost:${port}`);
    });
  } catch (error) {
    console.log("cammot connect to the server");
  }
}).catch(error => {
    console.log ('invalid database connection')
})
