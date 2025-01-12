import {combineReducers, createStore} from 'redux';
import userReducer from './reducers/reducers';

const rootReducer = combineReducers({
    user: userReducer,
});

export const store = createStore(rootReducer);
