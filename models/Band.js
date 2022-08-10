import { v4 as uuidv4 } from "uuid";

class Band {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
    this.votes = 0;
  }
}

module.exports = { Band };
