import React from 'react';
import { Profile } from '../../login/model/Profile';

interface Props {
	selectedProfile: Profile;
}

interface InternalState {
	profile: Profile;
}

class ProfileDetails extends React.Component<Props, InternalState>{

	constructor(props: Props) {
		super(props);
		
		this.state = {
			profile: {
				username: '',
				email: '',
				displayPic: '',
				id: '',
				phone: 0,
				role: '',
				streetAddress: '',
				zipCode:0
			}
		};

	}

	render() {
		return(
			<span>{this.state.profile.email}</span>
		);
	};


	componentDidMount() {
		console.log('componentDidMount is called');
		this.setState( {
			profile : this.props.selectedProfile
		});
	};
}
export default ProfileDetails;