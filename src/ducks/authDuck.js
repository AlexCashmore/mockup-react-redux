import request from 'superagent';
export const REQUEST_ACTION = 'zoom/auth/REQUEST_ACTION';
export const RECEIVE_ACTION = 'zoom/auth/RECEIVE_ACTION';

export default (
    state = { list: [],searching:false},
    action,
) => {
  switch (action.type) {
    case RECEIVE_ACTION:
      console.log(action.data);
      return Object.assign({},
          state,
          { list:action.data,searching:false });
      case REQUEST_ACTION:
      console.log('request');
      return Object.assign({},
          state,
          {searching:true });
    default:
      return state;
  }
};

function receiveAction(data) {
  return {
    type: RECEIVE_ACTION,
    data,
  };
}
function requestAction() {
  return {
    type: REQUEST_ACTION,
  };
}

export function getListData(){
  return(dispatch)=> {
    console.log('getting list data');
    dispatch(requestAction());
    try {
     return request
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((err, res) => {
              let listData = err.body;
             return dispatch(receiveAction(listData))

          });
    }

    catch (e) {
      console.log(e);
    }
  }
}

