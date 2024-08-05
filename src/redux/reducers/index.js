import { combineReducers } from "redux";
import notificationReducer from "@/redux/reducers/notification-reducers";

const rootReducer = combineReducers({
    notifications: notificationReducer,
    // Reducer lain jika ada
});

export default rootReducer;
