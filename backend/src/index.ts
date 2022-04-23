import "reflect-metadata"

import app from "./app";
import { AppDataSource } from "./database";

function start() {
  try {
    AppDataSource.initialize()
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (error) {
    console.log("Error to initialize server");
  }
}

start();
