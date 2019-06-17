import React from 'react';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Login from './Login';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Profile } from '../model/Profile';

import axios from 'axios';

export interface RequestParams {
	username: string;
	image: string;
}

interface Props {
	selectedProfile: Profile;
	loadProfile(requestParams: RequestParams): any;
	loadLoginSuccess(data: Profile): any;
	loadLoginFailure(error: any): any;
	loadLoginPicture(image: string): any;
}

interface InternalState {

}

class AccessAndAuthorization extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.responseGoogle = this.responseGoogle.bind(this);
	}

	render() {
		return (
			<div className="encloser">
                    <Login/>
                    <hr/>
                    <Form.Text className="text-muted">
                        Alternatively login via below channels.
                    </Form.Text>
                    <br/>
                    <Row>
                        <Col>
                            <GoogleLogin
                                clientId="93293366109-n9btq5pno3b2gj2ofoojb6g14sfh4a8c.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.failureGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Col>
                       <Col>
                            <FacebookLogin
								buttonStyle = { {height: 42, paddingTop: 6}}
                                appId=""
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                icon="fa-facebook"
                            />    
                        </Col>
                    </Row>

                </div>

		);
	}

	public async responseGoogle(response: any){
		const requestParams = {
			username: response.profileObj.givenName,
			image: response.profileObj.imageUrl
		}

		return await axios.get('http://localhost:9000/profiles/' + requestParams.username.toLowerCase())
             .then( (response: any) => {
				 this.props.loadLoginSuccess(response.data);
				 this.props.loadLoginPicture(requestParams.image);
				})
			 .catch((error: any) => this.props.loadLoginFailure(error));
			 
    }

    public responseFacebook(response: any) {
       // code for fb login success/failure
    }

    public failureGoogle(response: any){
        // login failed
    }

}

export default AccessAndAuthorization;

