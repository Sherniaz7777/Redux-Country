import { ADD_COUNTRY_REJECTED, ADD_COUNTRY_STARTED, ADD_COUNTRY_SUCCESS } from "../types/types";
import axios from "axios";

export  const getCountry = (name) => {
  return async (dispatch) => {
    dispatch(addCountryStarted());
    try {
      const { data } = await axios(`https://restcountries.com/v3.1/name/${name}`)
      dispatch(addCountrySuccess(data));
    } catch (error) {
      dispatch(addCountryRejected(error)); 
    }
  };
};

const addCountryStarted = () => ({ type: ADD_COUNTRY_STARTED });
const addCountrySuccess = (data) => ({ type: ADD_COUNTRY_SUCCESS, payload: data });
const addCountryRejected = () => ({ type: ADD_COUNTRY_REJECTED, payload: error });

