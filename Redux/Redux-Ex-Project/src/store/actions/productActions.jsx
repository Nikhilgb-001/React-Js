import axios from "axios";
import { getProducts } from "../reducers/productReducer";

export const asyncgetproducts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // here we have the syncronus data of products
    // console.log(response.data);
    dispatch(getProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
