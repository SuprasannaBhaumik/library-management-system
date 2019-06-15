import { connect } from 'react-redux';
import AccessAndAuthorization from './AccessAndAuthorization';
import { State } from '../../state/index';
import { getSelectedProfile } from '../state';
import { loadUserProfile } from '../action/LoginAction';

import { RequestParams } from './AccessAndAuthorization';

export const AccessAndAuthorizationContainer = connect(
	(state: State) => ({
		selectedProfile: getSelectedProfile(state)
	}), {
		loadProfile: (request: RequestParams) => loadUserProfile(request)
	}
)(AccessAndAuthorization);