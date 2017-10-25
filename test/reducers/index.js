import { combineReducers } from 'redux';
import commentsReducer from './comments_test';

const rootReducer =  combineReducers({
    comments: commentsReducer
});

export default rootReducer;