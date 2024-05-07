import { configureStore, combineReducers } from "@reduxjs/toolkit";

import favouriteCompanyReduce from "../reducers/favouriteCompanyReduce";
import mainSearchReduce from "../reducers/mainSearchReduce";
import getJobsReduce from "../reducers/getJobsReduce";

const rootReduce = combineReducers({
  favouriteCompany: favouriteCompanyReduce,
  fetchJobsResult: mainSearchReduce,
  getJobs: getJobsReduce,
});

const store = configureStore({
  reducer: rootReduce,
});
export default store;
