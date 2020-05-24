import { FOLLOW, UNFOLLOW, SET_USERS , SET_CURRENT_PAGE  ,SET_TOTAL_COUNT , IS_FETCHING, IN_PROGRES} from "../actions";

let oldState = {
  users: [],
  pageSize:100,
  totalUserCount:1000,
  currentPage:1,
  isFetching: false,
  inProgress:true,
};

export const usersReducer = (state = oldState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [ ...action.users],
      };
    }
    case SET_CURRENT_PAGE:{
      return{
        ...state,
        currentPage : action.currentPage
      }
    }
    case SET_TOTAL_COUNT:{
      return{
        ...state,
        totalUserCount: action.totalCount
      }
    }
    case IS_FETCHING:{
      return{
        ...state,
        isFetching:action.isFetching
      }
    }
    case IN_PROGRES:{
      return{
        ...state,
        inProgress:action.inProgress
      }
    }
    default:
      return state;
  }
};
