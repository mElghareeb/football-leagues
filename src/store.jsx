import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";


const middleware = applyMiddleware(
    thunk,
    createLogger()
);

export const store = createStore(
    reducers,
    middleware
);


