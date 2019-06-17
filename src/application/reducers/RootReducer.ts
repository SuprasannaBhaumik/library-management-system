import { combineReducers } from "redux";
import { State } from "../../state";
import { rootLoginReducer } from "../../login/reducer";

export function createRootReducer() {
	return combineReducers<State>({
		login: rootLoginReducer
	});
}

const rootReducer = createRootReducer();

export default rootReducer;