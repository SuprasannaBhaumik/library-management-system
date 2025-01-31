import { combineReducers } from "redux";
import { LoginState } from "../state";
import { reduceLoginSuccess } from '../reducer/loginReducer';

export const rootLoginReducer = combineReducers<LoginState>(
	{
		profile: reduceLoginSuccess
	}
);