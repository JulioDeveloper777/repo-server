import mongoose from "mongoose";

import config from "../config/database";

class Database {
  constructor() {
    this.connection = mongoose.connect(config.url, config.mongo);
  }
}

export default new Database();
