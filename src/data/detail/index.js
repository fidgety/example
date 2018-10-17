import { get } from "axios";

export default productId =>
  get(
    `https://cors-anywhere.herokuapp.com/https://www.moonpig.com/uk/api/product/product/?mpn=${productId}`,
    {
      headers: {
        "x-requested-with": "mat"
      }
    }
  ).then(({ data }) => data);
