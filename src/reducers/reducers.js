import {
    CHANGE_OFFSET,
  } from '../actions/actions';
  
  const initialState = {
    offset: 0,
  };
  
  const reducer = (state = initialState, action = {}) => {
    // console.log(`le reducer a reçu une action ${action.type}`);
  
    switch (action.type) {
      case CHANGE_OFFSET:
        return {
          ...state,
          offset: action.value,
        };

      default:
        return state;
    }
  };
  
  export default reducer;