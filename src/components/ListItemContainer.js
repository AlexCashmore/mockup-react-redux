//page wrapper with auth state checker here https://jsonplaceholder.typicode.com/posts

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListItem from './ListItem';
import { getListItemData } from '../ducks/authDuck';

const mapStateToProps = state => ({
  item:state.auth.item,
  isSearching:state.auth.searching,
});

const mapDispatchToProps = dispatch => ({
  onLoadRequestItem: (id) => {
    dispatch(getListItemData(id));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListItem));
