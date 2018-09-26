import { combineReducers } from 'redux';

const MEDICATION_STARTING_FETCH = 'zoomhealth/medication/STARTING_FETCH';
const MEDICATION_FINISHED_FETCH = 'zoomhealth/medication/FINISHED_FETCH';

export function uiFetchingReducer(state = false, action) {
  switch (action.type) {
    case MEDICATION_STARTING_FETCH:
      return true;
    case MEDICATION_FINISHED_FETCH:
      return false;
    default:
      return state;
  }
}
export function uiErrorReducer(state = null, action) {
  switch (action.type) {
    case MEDICATION_STARTING_FETCH:
      return null;
    case MEDICATION_FINISHED_FETCH:
      return action.error;
    default:
      return state;
  }
}
export function entityReducer(state = null, action) {
  switch (action.type) {
    case MEDICATION_STARTING_FETCH:
      return state;
    case MEDICATION_FINISHED_FETCH:
      return { ...action.medication };
    default:
      return state;
  }
}
export default combineReducers({
  isFetching: uiFetchingReducer,
  error: uiErrorReducer,
  entity: entityReducer,
});


export function fetchingMedicationAction() {
  return {
    type: MEDICATION_STARTING_FETCH,
  };
}
export function fetchedMedicationAction(medication, error) {
  return {
    type: MEDICATION_FINISHED_FETCH,
    medication,
    error,
  };
}
