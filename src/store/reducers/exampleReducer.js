import {
  EXAMPLE_REQUEST,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
  isExample: true,
  exampleErrorMessage: null,
  example: null,
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case EXAMPLE_REQUEST:
      return {
        ...state,
        isExample: true,
        exampleErrorMessage: null,
        example: null
      };
    case EXAMPLE_SUCCESS:
      return { ...state, isExample: false, example: payload };
    case EXAMPLE_FAILURE:
      return { ...state, isExample: false, exampleErrorMessage: payload };
    default:
      return state;
  }
}
