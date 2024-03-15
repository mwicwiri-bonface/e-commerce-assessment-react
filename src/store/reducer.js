import { combineReducers } from "redux"
import auth from './auth/reducer';
import store from './store/reducer'


const reducers = combineReducers({
    auth, store
});

export default reducers;