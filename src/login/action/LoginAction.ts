import { Profile } from "../model/Profile";
import { RequestParams } from "../view/AccessAndAuthorization";


export enum LoginActionTypes {
    LMS_LOGIN_REQUEST = 'LMS_LOGIN_REQUEST',
    LMS_LOGIN_SUCCESS = 'LMS_LOGIN_SUCCESS',
	LMS_LOGIN_FAILURE = 'LMS_LOGIN_FAILURE',
	LMS_SAVE_IMAGE = 'LMS_SAVE_IMAGE'
}

export type LoginAction =
    | {type: typeof LoginActionTypes.LMS_LOGIN_REQUEST, payload: RequestParams}
    | {type: typeof LoginActionTypes.LMS_LOGIN_SUCCESS, payload: Profile}
	| {type: typeof LoginActionTypes.LMS_LOGIN_FAILURE}
	| {type: typeof LoginActionTypes.LMS_SAVE_IMAGE, payload: string}

export function loadUserProfile(payload: RequestParams): LoginAction {
    return { type: LoginActionTypes.LMS_LOGIN_REQUEST, payload};
};

export function loadLoginSuccess(payload: Profile): LoginAction {
    return {type: LoginActionTypes.LMS_LOGIN_SUCCESS, payload};
};

export function loadLoginFailure(payload: any): LoginAction {
    return {type: LoginActionTypes.LMS_LOGIN_FAILURE};
}

export function saveUserImage(payload: string): LoginAction {
	return {type: LoginActionTypes.LMS_SAVE_IMAGE, payload};
}
