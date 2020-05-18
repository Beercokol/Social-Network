import {contentReducer} from './reducers/content-reducer';
import {messageReducer} from './reducers/message-reducer';
import {createStore, combineReducers} from 'redux';
import { usersReducer } from './reducers/users-reducer';

let reducers = combineReducers({profilePage:contentReducer
,messagePage:messageReducer,
usersPage: usersReducer});
let store = createStore(reducers);

export default store;