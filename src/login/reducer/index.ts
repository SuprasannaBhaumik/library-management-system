import { combineReducers } from "redux";
import { LoginState } from "../state";
import { reduceLoginSuccess } from '../reducer/loginReducer';

export const loginReducer = combineReducers<LoginState>(
	{
		data: combineReducers({
			profile: reduceLoginSuccess
		})
	}
);