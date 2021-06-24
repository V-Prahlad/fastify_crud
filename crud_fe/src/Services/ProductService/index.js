import axios from "axios";

import {
  deleteDataOptions,
  getDataOptions,
  postDataOptions,
  putDataOptions,
} from "../backendService";

const PRODUCT_LIST_API = "items";
const PRODUCT_CREATE_API = "items";
const PRODUCT_UPDATE_API = "items/";
const PRODUCT_DELETE_API = "items/";

export const getAllProductService = async () => {
  try {
    const response = await axios(getDataOptions(PRODUCT_LIST_API));
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createService = async (productName) => {
  try {
    const data = {
      name: productName,
    };
    const response = await axios(postDataOptions(PRODUCT_CREATE_API, data));
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateProductService = async (id, data) => {
  try {
    const response = await axios(putDataOptions(PRODUCT_UPDATE_API + id, data));
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteProductService = async (id, data) => {
  try {
    const response = await axios(
      deleteDataOptions(PRODUCT_DELETE_API + id, data)
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
