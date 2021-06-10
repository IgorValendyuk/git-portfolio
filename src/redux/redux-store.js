import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";



let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: navReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
	app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;