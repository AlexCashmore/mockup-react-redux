import { combineReducers } from 'redux';
import authDuck from './authDuck';
import detailDuck from "./detailDuck";


const appReducer = combineReducers({
  auth: authDuck,
    detail:detailDuck,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
