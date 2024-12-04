// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import {thunk} from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import jobReducer from './reducers/jobReducer';

// const rootReducer = combineReducers({
//     job: jobReducer,
// });

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

// src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./redux/slices/jobSlice";
import contactSlice from "./redux/slices/contactSlice";
import feedbackSlice from "./redux/slices/feedbackSlice";
import languageSlice from "./redux/slices/languageSlice";
import careerAdminReducer from './redux/admin/slice/careerAdminSlice';
import authReducer from './redux/admin/slice/authSlice';
import teamReducer from './redux/admin/slice/teamSlice';
import employeeReducer from "./redux/admin/slice/employeeSlice";

const store = configureStore({
  reducer: {
    jobApplications: jobSlice,
    contact: contactSlice,
    feedback: feedbackSlice,
    language: languageSlice,

    careerAdmin: careerAdminReducer,
    auth: authReducer,
    team: teamReducer,
    employees: employeeReducer,
  },
});

export default store;
