import { combineReducers } from "redux";
import { State } from "../../state";
import { loginReducer } from "../../login/reducer";

export function createRootReducer() {
	return combineReducers<State>({
		login: loginReducer
	});
}

const rootReducer = createRootReducer();

export default rootReducer;