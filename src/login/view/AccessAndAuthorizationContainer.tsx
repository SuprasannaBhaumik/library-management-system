import { connect } from 'react-redux';
import AccessAndAuthorization from './AccessAndAuthorization';
import { State } from '../../state/index';
import { getSelectedProfile } from '../state';
import { loadUserProfile } from '../action/LoginAction';

export const AccessAndAuthorizationContainer = connect(
	(state: State) => ({
		selectedProfile: getSelectedProfile(state)
	}), {
		loadProfile: (username: string) => loadUserProfile(username)
	}
)(AccessAndAuthorization);