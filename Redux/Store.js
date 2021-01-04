import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    createStore, 
    combineReducers, 
    applyMiddleware, 
     } from 'redux';
import thunk from "redux-thunk";
import userReducer from "./Reducers/userReducer";
import dataReducer from "./Reducers/dataReducer";
import uiReducer from "./Reducers/uiReducer";

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
    user: userReducer,
    data:dataReducer,
    UI:uiReducer,
});

const initStore = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default initStore