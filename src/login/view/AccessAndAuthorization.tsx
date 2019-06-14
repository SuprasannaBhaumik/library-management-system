import React from 'react';

import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Login from './Login';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface Props {
	success(username: string): any
}

interface InternalState {
	username: string;
}

class AccessAndAuthorization extends React.Component<Props, InternalState> {

	constructor(props: Props) {
		super(props);
		this.state = {
			username: ''
		};
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
                        {/*<Col>
                            <FacebookLogin
                                appId=""
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                icon="fa-facebook"
                            />    
                        </Col>*/}
                    </Row>

                </div>

		);
	}

	public responseGoogle(response: any){
		// the real code here will be to update the state of the application, and not individual state
		this.props.success(response.w3.ofa);
    }

    public responseFacebook(response: any) {
       // code for fb login success
    }

    public failureGoogle(response: any){
        // login failed
    }

}

export default AccessAndAuthorization;

