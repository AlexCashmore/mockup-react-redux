import { combineReducers } from 'redux';
import authDuck from './authDuck';


const appReducer = combineReducers({
  auth: authDuck,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
