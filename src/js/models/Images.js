import axios from "axios";

class Images {
  constructor() {
    this.result = [];
  }

  async fetchImages() {
    try {
      const res = await axios("https://api.myjson.com/bins/oylvx").then( res => res.data);
      this.result = res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Images;
