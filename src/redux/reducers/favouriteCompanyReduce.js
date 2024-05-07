import { ADD_FAVOURITE_COMPANY, REMOVE_FAVOURITE_COMPANY } from "../actions";

const initialState = {
  content: [],
};
const favouriteCompanyReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_COMPANY:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVOURITE_COMPANY:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};
export default favouriteCompanyReduce;
