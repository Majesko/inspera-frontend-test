import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import themeReducer from './themeReducer';

const appReducer = combineReducers({
    time: timeReducer,
    theme: themeReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
