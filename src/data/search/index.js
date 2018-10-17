import { get } from "axios";

export default searchTerm =>
  get(
    `https://cors-anywhere.herokuapp.com/https://search.moonpig.com/api/products?returnFacets=True&q=${searchTerm}`,
    {
      headers: {
        "x-requested-with": "mat"
      }
    }
  );
