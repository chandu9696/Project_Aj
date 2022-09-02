import changeTheNumber from "./UpDown";
import FetchAPi from "./ApiData";
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber,
        FetchAPi
    
    }
);

export default reducers;