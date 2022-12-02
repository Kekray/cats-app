import axios from "axios";

export default class PostService {
  static async getAll() {

    const response = await axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=26&order=DESC?&api_key=4cf3092e-218c-4c83-985f-e70322bf1b4a"
    );
    return response;
  }
}