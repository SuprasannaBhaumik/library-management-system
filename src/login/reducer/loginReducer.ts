import axios from 'axios';
import { LoginAction } from '../action/LoginAction';
import { Profile } from '../model/Profile';
import { Dispatch } from 'redux';
import { loadLoginSuccess, loadLoginFailure } from '../action/LoginAction';

const defaultProfile: Profile = {
    username: '',
    displayPic: '',
    email: '',
    phone: 1,
    role: 'LMS_USER',
    streetAddress: 'NA',
    zipCode: 1
}

export function loginReducer(action: LoginAction, dispatch: Dispatch) {
    if(action.type === 'LMS_LOGIN_REQUEST') {
            axios.get('http://localhost:9000/profile/' + action.payload)
            .then(function(response: any) {
				console.log('result');
				console.log(response);
				dispatch(loadLoginSuccess(response));
            })
            .catch(function (error: any) {
                dispatch(loadLoginFailure(error))
            })
    }
}

export function reduceLoginSuccess(state: Profile = defaultProfile, action: LoginAction) {
    switch (action.type) {
        case 'LMS_LOGIN_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}