import { createStore,applyMiddleware,compose} from "redux";
import reducers from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const middleware = [thunk];

const store = createStore(reducers,applyMiddleware(...middleware));


export default store;