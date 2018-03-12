import React from 'react';
import Pages from './components/PageRoutes';

//page wrapper with auth state checker here

/*import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PageView from '../../pages/core/PageView';
import { checkAuthState } from '../../ducks/authDuck';

const mapStateToProps = state => ({
  isCheckingAuth: state.auth.isChecking,
  isSilentAuth: state.auth.isSilent,
  isAuthenticated: state.auth.isAuthenticated,
  bootToLogin: state.auth.bootToLogin,
});

const mapDispatchToProps = dispatch => ({
  onNavigation: () => {
    dispatch(checkAuthState(true));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageView));
*/
export default function App() {
  return (
        <Pages />
  );
}
