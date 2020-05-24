import { SET_AUTH_USER } from "../actions";

let newState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = newState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return { ...state };
  }
};
