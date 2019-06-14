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

/*export function loginReducer(state: Profile = defaultProfile, action: LoginAction) {
    switch (action.type) {
        case 'LMS_LOGIN_REQUEST':
            axios.get('http://localhost:9000/profile/' + action.payload)
            .then(function(response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
                return {...defaultProfile, username: action.payload};
            })
        default:
           return state;
    }
}*/

export function reduceLoginSuccess(state: Profile = defaultProfile, action: LoginAction) {
    switch (action.type) {
        case 'LMS_LOGIN_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}