import {contentReducer} from './reducers/content-reducer';
import {messageReducer} from './reducers/message-reducer'
import {createStore, combineReducers} from 'redux';

let reducers = combineReducers({profilePage:contentReducer,messagePage:messageReducer});
let store = createStore(reducers);

export default store;