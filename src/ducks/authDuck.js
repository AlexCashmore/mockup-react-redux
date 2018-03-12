
export const REQUEST_AUTH_STATE = 'zoom/auth/REQUEST_AUTH_STATE';
export const RECEIVE_AUTH_STATE_AUTHENTICATED = 'zoom/auth/RECEIVE_AUTH_STATE_AUTHENTICATED';
export const RECEIVE_AUTH_STATE_UNAUTHENTICATED = 'zoom/auth/RECEIVE_AUTH_STATE_UNAUTHENTICATED';
export const AUTH_STATE_LOGOUT = 'zoom/auth/AUTH_STATE_LOGOUT';
export const BOOT_TO_LOGIN = 'zoom/auth/BOOT_TO_LOGIN';

export default (
    state = { isChecking: false, isSilent: true, isAuthenticated: false, bootToLogin: false },
    action,
) => {
  switch (action.type) {
    case REQUEST_AUTH_STATE:
      return Object.assign({},
          state,
          { isChecking: true, isSilent: action.silent, bootToLogin: false });
    case RECEIVE_AUTH_STATE_AUTHENTICATED:
      return Object.assign({},
          state,
          { isChecking: false, isAuthenticated: true });
    case RECEIVE_AUTH_STATE_UNAUTHENTICATED:
      return Object.assign({},
          state,
          { isChecking: false, isAuthenticated: false });
    case BOOT_TO_LOGIN:
      return { isChecking: false, isSilent: true, isAuthenticated: false, bootToLogin: true };
    default:
      return state;
  }
};


function requestAuthState(silent) {
  return {
    silent,
    type: REQUEST_AUTH_STATE,
  };
}
function receiveAuthStateAuthenticated() {
  return {
    type: RECEIVE_AUTH_STATE_AUTHENTICATED,
  };
}
function receiveAuthStateUnauthenticated() {
  return {
    type: RECEIVE_AUTH_STATE_UNAUTHENTICATED,
  };
}
function authStateLogout() {
  return {
    type: AUTH_STATE_LOGOUT,
  };
}

