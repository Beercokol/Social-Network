import { FOLLOW, UNFOLLOW, SET_USERS } from "../actions";

let oldState = {
  users: [
    {
      id: 1,
      fullName: "Alex K",
      photoUrl: "https://thumbs.dfs.ivi.ru/storage38/contents/3/9/30b2b6bb2b19632824c170e20caf5c.jpg",
      status: "life is beautifull",
      followed: false,
      location: { country: "Russia", city: "VRN" },
    },
    {
      id: 2,
      fullName: "Alex K",
      photoUrl: "https://thumbs.dfs.ivi.ru/storage38/contents/3/9/30b2b6bb2b19632824c170e20caf5c.jpg",
      status: "life is beautifull",
      followed: true,
      location: { country: "Russia", city: "VRN" },
    },
    {
      id: 3,
      fullName: "Alex K",
      photoUrl: "https://thumbs.dfs.ivi.ru/storage38/contents/3/9/30b2b6bb2b19632824c170e20caf5c.jpg",
      status: "life is beautifull",
      followed: false,
      location: { country: "Russia", city: "VRN" },
    },
  ],
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
        users: [...state.users, action.users],
      };
    }
    default:
      return state;
  }
};
