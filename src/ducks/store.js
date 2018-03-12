import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import { rootReducer } from './root';

export default function configureStore(initState = {}) {
  return createStore(
      rootReducer,
      initState,
      applyMiddleware(ReduxThunk, ReduxPromise),
  );
}