import {contentReducer} from './reducers/content-reducer';
import {messageReducer} from './reducers/message-reducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { usersReducer } from './reducers/users-reducer';
import { authReducer } from './reducers/auth-reducer';
import ReduxThunk from 'redux-thunk' // no changes here 😀
import thunk from 'redux-thunk';


let reducers = combineReducers({profilePage:contentReducer
,messagePage:messageReducer,
usersPage: usersReducer,
auth:authReducer});
let store = createStore(reducers,applyMiddleware(thunk));
export default store;