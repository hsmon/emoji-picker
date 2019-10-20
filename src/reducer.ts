import {TYPE_INITIAL_STATE , TYPE_INITIAL_TYPE } from './types/types'

//===============================
// @Reducer
//===============================
export const initialState: TYPE_INITIAL_STATE = {
  data: false,
  payload: []
};
const reducer = (state: TYPE_INITIAL_STATE | Object, action: TYPE_INITIAL_TYPE) => {
  switch (action.type) {
    case "INITIAL":
      return initialState;
    case "READY":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
