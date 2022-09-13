import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerAddEmployee from "./employee/reducerEmployee"


 const rootReducer =  combineReducers({
    employeeData: reducerAddEmployee
 })

 const store = createStore(rootReducer, applyMiddleware(thunk))

 export default store