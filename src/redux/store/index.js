import { configureStore, combineReducers } from "@reduxjs/toolkit";

import favouriteCompanyReduce from "../reducers/favouriteCompanyReduce";
import mainSearchReduce from "../reducers/mainSearchReduce";
import getJobsReduce from "../reducers/getJobsReduce";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import { encryptTrasform } from "redux-persist-transform-encrypt";

const rootReduce = combineReducers({
  favouriteCompany: favouriteCompanyReduce,
  fetchJobsResult: mainSearchReduce,
  getJobs: getJobsReduce,
});
const persistConfig = {
  key: "root",
  storage,
  //trasforms: [
  // encryptTrasform({
  // secretKet: process.env.REACT_APP_PERSIST_KEY
  // }),
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReduce);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
