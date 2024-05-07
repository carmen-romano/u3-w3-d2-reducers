import {
  GET_COMPANY,
  GET_SEARCH_MAIN_ERROR_OFF,
  GET_SEARCH_MAIN_ERROR_ON,
  GET_SEARCH_MAIN_LOADING_OFF,
  GET_SEARCH_MAIN_LOADING_ON,
} from "../actions";

const inizialState = {
  content: [],
  isLoading: true,
  hasError: false,
  error: "",
};

const mainSearchReduce = (state = inizialState, action) => {
  switch (action.type) {
    case GET_COMPANY:
      return {
        ...state,
        content: action.payload,
      };
    case GET_SEARCH_MAIN_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SEARCH_MAIN_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case GET_SEARCH_MAIN_ERROR_OFF:
      return {
        ...state,
        hasError: false,
      };
    case GET_SEARCH_MAIN_ERROR_ON:
      return {
        ...state,
        hasError: true,
      };
    default:
      return state;
  }
};
export default mainSearchReduce;
