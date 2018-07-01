import * as consts from "../actions/consts";

export function booksReducer(state = {}, action) {
  switch (action.type) {
    case consts.FETCH_BOOKS:
      return action.payload;
    case consts.ADD_BOOK:
      const { payload } = action;
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}
