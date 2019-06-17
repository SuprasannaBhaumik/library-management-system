import { LoginAction } from '../action/LoginAction';
import { Profile } from '../model/Profile';

const defaultProfile: Profile = {
    username: '',
    displayPic: '',
    email: '',
    phone: 1,
    role: 'LMS_USER',
    streetAddress: 'NA',
    zipCode: 1
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