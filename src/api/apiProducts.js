import React from "react";
import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.host}/products`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const getById = async (id) => {
  try {
    const result = await axios.get(`${config.host}/products/${id}`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const getDynamicProductById = async (id) => {
    try {
      const result = await axios.get(`${config.host}/dynamic-products/${id}`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return await error.message;
    }
  };

const addDynamicProperty = async (payload) => {
  try {
    const result = await axios.post(`${config.host}/dynamic-products`, payload);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

const updateDynamicProperty = async (id, payload) => {
  console.log(id);
  console.log(payload);
  
    try {
      const result = await axios.put(`${config.host}/dynamic-products/${id}`, payload);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return await error.message;
    }
  };

const deleteDynamicProperty = async (id) => {

  try {
    const result = await axios.delete(`${config.host}/dynamic-products/${id}`);
  } catch (error) {
    console.log(error);
    return await error.message;
  }
};

export default {
  list,
  getById,
  addDynamicProperty,
  deleteDynamicProperty,
  getDynamicProductById,
  updateDynamicProperty
};
