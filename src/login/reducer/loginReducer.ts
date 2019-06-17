import axios from 'axios';
import { LoginAction } from '../action/LoginAction';
import { Profile } from '../model/Profile';
import { Dispatch } from 'redux';
import { loadLoginSuccess, loadLoginFailure, saveUserImage } from '../action/LoginAction';

const defaultProfile: Profile = {
    username: '',
    displayPic: '',
    email: '',
    phone: 1,
    role: 'LMS_USER',
    streetAddress: 'NA',
    zipCode: 1
}

export function loginReducer(state: Profile = defaultProfile, action: LoginAction) {

	switch (action.type) {
		case 'LMS_LOGIN_REQUEST':
			console.log(action.payload);
		    axios.get('http://localhost:9000/profiles/' + action.payload.username.toLowerCase())
            .then(function(response: any) {
				console.log(response.data);
				return { ...response.data, username: 'super user'};
            })
            .catch(function (error: any) {
               return {...defaultProfile, username:'error user'};
			})
		default:
			return {...defaultProfile, username: 'skeleton', email:'horror@home.com'};
	}

    /*if(action.type === 'LMS_LOGIN_REQUEST') {
            axios.get('http://localhost:9000/profile/' + action.payload.username)
            .then(function(response: any) {
				console.log('result');
				console.log(response);
				// dispatch(loadLoginSuccess(response));
				// dispatch(saveUserImage(action.payload.image))
            })
            .catch(function (error: any) {
               // dispatch(loadLoginFailure(error))
            })
    }*/
}

export function reduceLoginSuccess(state: Profile = defaultProfile, action: LoginAction) {
    switch (action.type) {
        case 'LMS_LOGIN_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export function reduceImage( state: string = "", action: LoginAction) {
	switch (action.type) {
		case 'LMS_SAVE_IMAGE':
			return action.payload;
		default:
			return state;
	}
}