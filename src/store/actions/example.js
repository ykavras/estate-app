import { EXAMPLE_REQUEST, EXAMPLE_SUCCESS, EXAMPLE_FAILURE } from './types';
import api from "../../lib/api";

export const fetchingRequest = type => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const example = () => {
  return async dispatch => {
    dispatch(fetchingRequest(EXAMPLE_REQUEST));
    try {
      const response = await api.get("example/");
      const payload = await response.data;
      dispatch(fetchingSuccess(EXAMPLE_SUCCESS, payload));
    } catch (error) {
      dispatch(fetchingFailure(EXAMPLE_FAILURE, error.response));
    }
  };
};

