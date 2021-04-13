import * as types from "../actions/TYPES";

const initialState = {
  english: true,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.BANGLA:
      return { ...state, english: !state.english };

    default:
      return state;
  }
};

export default reducers;
