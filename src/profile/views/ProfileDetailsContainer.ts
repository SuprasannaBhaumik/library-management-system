import { connect } from 'react-redux';
import { getSelectedProfile } from '../../login/state';
import { State } from '../../state/index';
import  ProfileDetails  from './ProfileDetails';

 export const ProfileDetailsContainer = connect( (state: State) => ({
		selectedProfile: getSelectedProfile(state)
	}), {}
)(ProfileDetails);