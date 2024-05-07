export const ADD_FAVOURITE_COMPANY = "ADD_FAVOURITE_COMPANY";
export const REMOVE_FAVOURITE_COMPANY = "REMOVE_FAVOURITE_COMPANY";
export const GET_COMPANY = "GET_COMPANY";
export const GET_JOBS = "GET_JOBS";
export const GET_SEARCH_MAIN_ERROR_ON = "GET_SEARCH_MAIN_ERROR_ON";
export const GET_SEARCH_MAIN_ERROR_OFF = "GET_SEARCH_MAIN_ERROR_OFF";
export const GET_SEARCH_MAIN_LOADING_ON = "GET_SEARCH_MAIN_LOADING_ON";
export const GET_SEARCH_MAIN_LOADING_OFF = "GET_SEARCH_MAIN_LOADING_OFF";

export const addFavouriteCompany = companyName => {
  return (dispatch, getState) => {
    const state = getState();
    const isAlreadyAdded = state.favouriteCompany.content.includes(companyName);

    if (!isAlreadyAdded) {
      dispatch({
        type: ADD_FAVOURITE_COMPANY,
        payload: companyName,
      });
    }
  };
};
export const RemoveFavouriteCompany = i => ({
  type: REMOVE_FAVOURITE_COMPANY,
  payload: i,
});

export const mainSearchAction = query => {
  return async dispatch => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (!response.ok) {
        throw new Error("Errore main fetch");
      }
      const fetchJob = await response.json();
      dispatch({
        type: GET_COMPANY,
        payload: fetchJob,
      });
      dispatch({ type: GET_SEARCH_MAIN_ERROR_OFF });
    } catch (error) {
      console.log("error");
      dispatch({ type: GET_SEARCH_MAIN_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: GET_SEARCH_MAIN_LOADING_OFF });
    }
  };
};

export const getJobsFetchAction = params => {
  return async dispatch => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?company=";
      let response = await fetch(baseEndpoint + params);
      if (!response.ok) {
        throw new Error("errore fetch jobs");
      }
      const getJobs = await response.json();
      dispatch({
        type: GET_JOBS,
        payload: getJobs,
      });
    } catch (error) {
      console.log("error");
    }
  };
};
