//page wrapper with auth state checker here https://jsonplaceholder.typicode.com/posts

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListPage from './ListPage';
import { getListData } from '../ducks/authDuck';

const mapStateToProps = state => ({
  listItems:state.auth.list,
  isSearching:state.auth.searching,
});

const mapDispatchToProps = dispatch => ({
  onLoadRequest: () => {
    dispatch(getListData());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPage));
