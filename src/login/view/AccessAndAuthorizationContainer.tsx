import { connect } from 'react-redux';
import AccessAndAuthorization from './AccessAndAuthorization';
import { State } from '../../state/index';
import { getSelectedProfile } from '../state';
import { loadUserProfile, loadLoginSuccess, loadLoginFailure, saveUserImage } from '../action/LoginAction';

import { RequestParams } from './AccessAndAuthorization';

import { Profile } from '../model/Profile';


export const AccessAndAuthorizationContainer = connect(
	(state: State) => ({
		selectedProfile: getSelectedProfile(state)
	}), {
		loadProfile: (request: RequestParams) => loadUserProfile(request),
		loadLoginSuccess: (data: Profile) => loadLoginSuccess(data),
		loadLoginFailure: (error: any) => loadLoginFailure(error),
		loadLoginPicture: (image: string) => saveUserImage(image)
	}
)(AccessAndAuthorization);