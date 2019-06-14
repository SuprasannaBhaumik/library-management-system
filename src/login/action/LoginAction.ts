import { Profile } from "../model/Profile";


export enum LoginActionTypes {
    LMS_LOGIN_REQUEST = 'LMS_LOGIN_REQUEST',
    LMS_LOGIN_SUCCESS = 'LMS_LOGIN_SUCCESS',
    LMS_LOGIN_FAILURE = 'LMS_LOGIN_FAILURE'
}

export type LoginAction =
    | {type: typeof LoginActionTypes.LMS_LOGIN_REQUEST, payload: string}
    | {type: typeof LoginActionTypes.LMS_LOGIN_SUCCESS, payload: Profile}
    | {type: typeof LoginActionTypes.LMS_LOGIN_FAILURE}

export function loginRequest(payload: string): LoginAction {
    return { type: LoginActionTypes.LMS_LOGIN_REQUEST, payload};
};

export function loadLoginSuccess(payload: Profile): LoginAction {
    return {type: LoginActionTypes.LMS_LOGIN_SUCCESS, payload};
};

export function loadLoginFailure(payload: any): LoginAction {
    return {type: LoginActionTypes.LMS_LOGIN_FAILURE};
}