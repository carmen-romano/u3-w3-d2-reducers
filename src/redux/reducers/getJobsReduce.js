import { GET_JOBS } from "../actions";

const initialState = {
  content: null,
};
const getJobsReduce = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default getJobsReduce;
